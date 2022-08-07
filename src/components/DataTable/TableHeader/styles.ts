import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    noSelect: {
      cursor: 'default',
    },
    noHover: {
      '&:hover .MuiTableSortLabel-icon': {
        opacity: 0,
      },
    },
    title: {
      width: '100%',
      color: theme.colors.gray2,
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '24px',
    },
    header: {
      borderBottom: `1px solid ${theme.colors.gray3}`,
      background: theme.colors.pureWhite,
    },
    buttonExpand: {
      backgroundColor: theme.colors.pureWhite,
      paddingRight: 0,
    },
    hidden: {
      display: 'none',
    },
  });

export const useStyles = makeStyles(styles);
