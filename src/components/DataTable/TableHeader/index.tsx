import React, { useMemo } from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import clsx from 'clsx';
import { DataTableColumn } from '../types';

import { styles, useStyles } from './styles';
import { StyledComponentProps } from 'types/style';
import { SortEnum } from 'enums/sortEnum';

export interface ComponentProps extends StyledComponentProps<typeof styles> {
  columns: Array<DataTableColumn>;
  orderBy?: string;
  order?: SortEnum;
  expandableRows?: boolean;
  onRequestSort?: (name: string) => void;
  setHeaderProps?: () => Record<string, any>;
  setCellHeaderExpandProps?: () => Record<string, any>;
  CollapseAllButton?: React.ReactNode;
  hidden?: boolean;
}

export default function TableHeader(props: ComponentProps) {
  const classes = useStyles(props);
  const {
    hidden,
    order,
    orderBy,
    expandableRows,
    onRequestSort,
    setHeaderProps,
    columns,
    CollapseAllButton,
    setCellHeaderExpandProps,
  } = props;
  const sortDirection =
    order === SortEnum.ASCENDING
      ? 'asc'
      : order === SortEnum.DESCENDING
        ? 'desc'
        : undefined;

  const cells = useMemo(() => {
    const createSortHandler = (name: string) => (event: any) => {
      if (onRequestSort) {
        onRequestSort(name);
      }
    };
    return columns.map((headCell, index) => {
      const cellHeaderProps = headCell.options?.setCellHeaderProps
        ? headCell.options?.setCellHeaderProps({
          index,
          ...headCell,
        }) || {}
        : {};

      const { className, ...otherCellHeaderProps } = cellHeaderProps;

      return (
        <TableCell
          className={clsx(classes.noSelect, className, classes.header)}
          key={`${headCell.name}-${index.toString()}`}
          align={headCell.options?.numeric ? 'right' : 'left'}
          sortDirection={orderBy === headCell.name ? sortDirection : false}
          style={headCell.width ? { width: headCell.width } : undefined}
          {...otherCellHeaderProps}
        >
          <TableSortLabel
            className={`${classes.title} ${headCell.options?.sort
                ? ''
                : clsx(classes.noSelect, classes.noHover)
              }`}
            active={!!(headCell.options?.sort && orderBy === headCell.name)}
            direction={orderBy === headCell.name ? sortDirection : 'asc'}
            onClick={
              headCell.options?.sort
                ? createSortHandler(headCell.name)
                : undefined
            }
            hideSortIcon={!headCell.options?.sort}
          >
            {headCell.options?.customHeaderRender
              ? headCell.options?.customHeaderRender()
              : headCell.label}
          </TableSortLabel>
        </TableCell>
      );
    });
  }, [columns, onRequestSort, sortDirection, orderBy, classes]);

  const { className, ...otherProps } = setHeaderProps
    ? setHeaderProps()
    : { className: '' };

  const expandCell = React.useMemo(() => {
    const { className: classNameHeaderExpand } = setCellHeaderExpandProps
      ? setCellHeaderExpandProps()
      : { className: '' };
    return expandableRows ? (
      <TableCell
        className={clsx(
          classes.noSelect,
          classes.buttonExpand,
          classNameHeaderExpand,
        )}
      >
        {CollapseAllButton}
      </TableCell>
    ) : undefined;
  }, [CollapseAllButton, classes, expandableRows, setCellHeaderExpandProps]);
  return (
    <TableHead
      className={clsx(className, { [classes.hidden]: hidden })}
      {...otherProps}
    >
      <TableRow>
        {expandCell}
        {cells}
      </TableRow>
    </TableHead>
  );
}
