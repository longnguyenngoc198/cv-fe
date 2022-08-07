import React, { useState, useCallback, useEffect, useMemo } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
// import TablePagination from '@material-ui/core/TablePagination';

import clsx from 'clsx';
import MTableRow from '@material-ui/core/TableRow';
import MTableCell from '@material-ui/core/TableCell';
import { Typography } from '@material-ui/core';
import TableTitle, { DataTableSearchOption } from './TableTitle';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { DataTableProps, DataTableOptions } from './types';
import { useDebounceCallBack } from 'hooks/useDebounceCallback';
import { SortEnum } from 'enums/sortEnum';
import { INPUT_DEBOUNCE_DURATION } from 'constants/ui';
import usePrevious from 'hooks/usePrevious';
import { compareObject, containString } from 'utils/compare';
// import CircularLoader from '../Loader/CircularLoader';
import { useStyles } from './styles';

const defaultOptions: Pick<
  DataTableOptions,
  'page' | 'rowsPerPage' | 'pagination'
> = {
  page: 0,
  rowsPerPage: 10,
  pagination: true,
};

export default function DataTable(props: DataTableProps) {
  const classes = useStyles();
  const {
    data,
    columns,
    options,
    title,
    elevation = 0,
    renderExtraView,
    setContainerTableProps,
    renderContentStatus,
    error,
    loading = false,
    tableClassName,
    insertViewIndexs,
    tableId,
    renderInsertView,
  } = props;
  const {
    page,
    rowsPerPage,
    pagination,
    count,
    search,
    EmptyDataContent,
    downloadOptions,
    expandableRowsOnClick,
    expandableRows,
    rowExpandIconTooltip,
    onChangePage,
    onChangeRowsPerPage,
    onColumnSortChange,
    getDataId,
    renderExpandableRow,
    isRowExpandable,
    setRowProps,
    setExpandRowProps,
    setHeaderProps,
    setCellHeaderExpandProps,
    renderBottomContent,
    stickyHeader,
    CollapseAllButton,
    onToggleExpand,
    onClickTableRow,
    noHeader,
    renderRowTooltip,
    labelDisplayedRows,
  } = { ...defaultOptions, ...options };

  // Own states
  const [curPage, setCurPage] = useState(page);
  const [pageSize, setPageSize] = useState(rowsPerPage);
  const [orderBy, setOrderBy] = useState(options.orderBy);
  const [orderDirection, setOrderDirection] = useState(options.orderDirection);
  const [searchText, setSearchText] = useState(search?.searchText || '');
  const [searchReadOnly, setSearchReadonly] = useState(
    !!search?.readonly || false,
  );

  const localFilter = !search || !search.onSearchChange;

  // Handlers
  const handleChangePage = useCallback(
    (_: any, newPage: number) => {
      if (onChangePage) {
        onChangePage(newPage);
      } else {
        setCurPage(newPage);
      }
    },
    [onChangePage],
  );

  const handleChangeRowsPerPage = useCallback(
    (event: any) => {
      const size = parseInt(event.target.value, 10);
      if (onChangeRowsPerPage) {
        onChangeRowsPerPage(size);
      } else {
        setPageSize(size);
      }
      // Force reset to first page since data was changed
      setCurPage(0);
    },
    [onChangeRowsPerPage],
  );

  const handleRequestSort = (name: string) => {
    const isAsc = orderBy === name && orderDirection === SortEnum.ASCENDING;
    const newDir = isAsc ? SortEnum.DESCENDING : SortEnum.ASCENDING;
    if (onColumnSortChange) {
      onColumnSortChange(name, newDir);
    } else {
      setOrderDirection(newDir);
      setOrderBy(name);
    }
  };

  // Calculate display data from current state
  const [displayData, displayCount] = useMemo(() => {
    let newData = [...data];
    let dataCount = count || 0;
    // Self sort data if needed
    if (!onColumnSortChange && orderBy && orderDirection) {
      newData = data
        .slice()
        .sort((row1, row2) =>
          compareObject(row1, row2, orderDirection, orderBy),
        );
    }
    // Self search if needed
    if (localFilter && searchText) {
      newData = data.filter((row) => {
        return Boolean(
          columns.find(
            (col) =>
              col.options &&
              col.options.search &&
              containString(row[col.name], searchText),
          ),
        );
      });

      dataCount = newData.length;
    }

    // Self pagination
    if (pagination && !onChangePage)
      newData = newData.slice(curPage * pageSize, (curPage + 1) * pageSize);
    // Insert row
    if (insertViewIndexs !== undefined) {
      insertViewIndexs.forEach((val) => {
        newData.splice(val, 0, {
          isInsertView: true,
        });
      });
    }
    return [newData, dataCount];
  }, [
    data,
    curPage,
    pageSize,
    orderDirection,
    orderBy,
    pagination,
    columns,
    searchText,
    count,
    localFilter,
    insertViewIndexs,
    onColumnSortChange,
    onChangePage,
  ]);

  const notifySearchChanged = useDebounceCallBack(
    (word: string) => {
      if (search?.onSearchChange) {
        search.onSearchChange(word);
      }
    },
    INPUT_DEBOUNCE_DURATION,
    [search],
  );

  const onSearchChange = useCallback(
    (word: string) => {
      setSearchText(word);
      notifySearchChanged(word);
      if (localFilter) {
        // Force reset to first page since data was changed
        setCurPage(0);
      }
    },
    [notifySearchChanged, localFilter],
  );

  const titleOptions = useMemo(
    () => ({
      download: downloadOptions
        ? {
          tooltip: downloadOptions.tooltip,
          processing: downloadOptions.processing,
          onDownload: () =>
            downloadOptions.onDownload({
              searchText,
              orderBy,
              orderDirection,
            }),
          icon: downloadOptions.icon,
        }
        : undefined,
      search: search
        ? ({
          searchText,
          readonly: searchReadOnly,
          onSearchChange,
        } as DataTableSearchOption)
        : undefined,
    }),
    [
      searchText,
      searchReadOnly,
      downloadOptions,
      search,
      orderBy,
      orderDirection,
      onSearchChange,
    ],
  );

  // Update state when props changed
  useEffect(() => {
    if (options.onChangePage) {
      setCurPage(options.page);
    }

    if (options.onColumnSortChange) {
      setOrderBy(options.orderBy);
      setOrderDirection(options.orderDirection);
    }

    if (options.onChangeRowsPerPage) {
      setPageSize(options.rowsPerPage);
    }

    if (options.search) {
      setSearchReadonly(!!options.search.readonly);
      // Reset search text if not local search
      if (options.search.onSearchChange) {
        setSearchText(options.search.searchText || '');
      }
    }
  }, [options]);

  const lastData = usePrevious(data);
  useEffect(() => {
    if (data !== lastData && !options.onChangePage) {
      // Reset page number if data changed and self page manage
      setCurPage(0);
    }
  }, [data, lastData, options]);

  const { className, ...otherProps } = setContainerTableProps
    ? setContainerTableProps()
    : { className: '' };

  const Content = useMemo(() => {
    const numberColumns = (columns?.length || 0) + (expandableRows ? 1 : 0);
    if (!displayData.length) {
      if (loading) return null; // loading status
      const isError = !loading && error;
      const isEmpty = !loading && !error && !data.length;
      const emptyElement = React.isValidElement(EmptyDataContent) ? (
        EmptyDataContent
      ) : (
        <Typography className={classes.noDataMessage} variant="h6">
          {EmptyDataContent || 'No data available'}
        </Typography>
      );

      return (
        <MTableRow>
          <MTableCell colSpan={numberColumns} className={classes.cursorDefault}>
            {isEmpty && emptyElement}
            {isError && renderContentStatus && renderContentStatus(error)}
          </MTableCell>
        </MTableRow>
      );
    }

    const rows = displayData.map((row, i) => {
      if (row?.isInsertView === true && renderInsertView) {
        return (
          <MTableRow className={classes.insertedRow} key={i.toString()}>
            <MTableCell
              colSpan={numberColumns}
              className={classes.cursorDefault}
            >
              {renderInsertView(row)}
            </MTableCell>
          </MTableRow>
        );
      }
      return (
        <TableRow
          key={getDataId ? getDataId(row) : i.toString()}
          columns={columns}
          rowData={row}
          rowIndex={i}
          isExpandable={
            isRowExpandable ? isRowExpandable(row, i) : expandableRows
          }
          expandableRowsOnClick={expandableRowsOnClick}
          rowExpandIconTooltip={rowExpandIconTooltip}
          renderExpandableRow={renderExpandableRow}
          setRowProps={setRowProps}
          setExpandRowProps={setExpandRowProps}
          onToggleExpand={onToggleExpand}
          onClickTableRow={onClickTableRow}
          renderRowTooltip={renderRowTooltip}
        />
      );
    });

    return (
      <>
        {rows}
        {renderBottomContent && (
          <MTableRow key="load-more-row" className={classes.cursorDefault}>
            <MTableCell colSpan={numberColumns}>
              {renderBottomContent()}
            </MTableCell>
          </MTableRow>
        )}
      </>
    );
  }, [
    displayData,
    columns,
    expandableRows,
    expandableRowsOnClick,
    rowExpandIconTooltip,
    renderInsertView,
    isRowExpandable,
    getDataId,
    renderExpandableRow,
    setRowProps,
    setExpandRowProps,
    error,
    renderContentStatus,
    renderBottomContent,
    EmptyDataContent,
    classes,
    data.length,
    loading,
    onToggleExpand,
    onClickTableRow,
    renderRowTooltip,
  ]);

  const shouldRenderPagination =
    !(!loading && !error && !data.length) && pagination;
  return (
    <Paper elevation={elevation} className={classes.root}>
      {/* <CircularLoader loading={loading} type="fullContent" /> */}
      {title && (
        <TableTitle
          title={title.title}
          classes={title.classes}
          options={titleOptions}
        />
      )}
      {renderExtraView && renderExtraView()}
      <TableContainer className={clsx(className)} {...otherProps}>
        <Table
          stickyHeader={stickyHeader}
          className={clsx(tableClassName)}
          id={tableId}
        >
          {!noHeader && (
            <TableHeader
              columns={columns}
              onRequestSort={handleRequestSort}
              order={orderDirection}
              orderBy={orderBy}
              expandableRows={!!renderExpandableRow}
              setHeaderProps={setHeaderProps}
              setCellHeaderExpandProps={setCellHeaderExpandProps}
              CollapseAllButton={CollapseAllButton}
            />
          )}
          <TableBody>{Content}</TableBody>
        </Table>
      </TableContainer>

      {/* {shouldRenderPagination && (
        <TablePagination
          className={classes.pagination}
          rowsPerPageOptions={options.rowsPerPageOptions}
          component="div"
          count={displayCount}
          rowsPerPage={pageSize}
          page={curPage}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelDisplayedRows={labelDisplayedRows}
        />
      )} */}
    </Paper>
  );
}
