/* eslint-disable react/jsx-no-duplicate-props */
import React, { useCallback } from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import IconDownload from 'assets/icon/IconDownload';
import SearchIcon from 'assets/icon/search-icon';

import CircularProgress from '@material-ui/core/CircularProgress';
import SMLTextField from 'components/common/SMLTextField';
import { styles, useStyles } from './styles';
import { StyledComponentProps } from 'types/style';

export interface DataTableSearchOption {
  searchText: string;
  searchPlaceholder?: string;
  readonly?: boolean;
  onSearchChange: (searchText: string) => void;
}

export interface DataTableExportOption {
  tooltip?: string;
  processing?: boolean;
  icon?: React.ReactNode;
  onDownload: () => void;
}

export interface ComponentProps extends StyledComponentProps<typeof styles> {
  title?: string | React.ReactNode;
  options: {
    search?: DataTableSearchOption;
    download?: DataTableExportOption;
  };
}

export default function TableTitle(props: ComponentProps) {
  const classes = useStyles(props);
  const { title, options } = props;

  const onChanged = useCallback(
    (event: React.ChangeEvent<any>) => {
      if (options.search) {
        options.search.onSearchChange(event.target.value);
      }
    },
    [options],
  );

  return (
    <Toolbar className={classes.toolbar}>
      {typeof title === 'string' ? (
        <Typography
          variant="subtitle2"
          id="tableTitle"
          className={classes.title}
        >
          {title}
        </Typography>
      ) : (
        title
      )}
      <div className={classes.grow} />
      {options?.search ? (
        <div className={classes.search}>
          <SMLTextField
            placeholder={options.search.searchPlaceholder || 'Search'}
            inputProps={{ 'aria-label': 'search' }}
            value={options.search.searchText}
            InputProps={{
              readOnly: options.search.readonly,
            }}
            onChange={onChanged}
            endAdornmentIcon={<SearchIcon />}
          />
        </div>
      ) : null}
      {options.download ? (
        <Tooltip
          title={options.download.tooltip || ''}
          disableHoverListener={!options.download.tooltip}
        >
          <div className={classes.wrapButtonLoading}>
            <IconButton
              onClick={options.download.onDownload}
              disabled={options.download.processing}
              className={classes.buttonDownload}
            >
              {options.download.icon || <IconDownload />}
            </IconButton>
            {options.download.processing && (
              <CircularProgress className={classes.loading} thickness={2} />
            )}
          </div>
        </Tooltip>
      ) : null}
    </Toolbar>
  );
}
