import lightBlue from '@material-ui/core/colors/lightBlue';

const overrides = {
  MuiIconButton: {
    root: {
      '&:hover': {
        backgroundColor: 'none',
      },
    },
  },
  MuiButton: {
    root: {
      borderRadius: 0,
      '&:hover': 'none',
    },
  },
  MuiCssBaseline: {
    '@global': {
      '*::-webkit-scrollbar': {
        width: '7px',
        height: '7px',
      },
      '*::-webkit-scrollbar-track': {
        backgroundColor: '#100113',
        border: '3px solid white',
      },
      '*::-webkit-scrollbar-thumb': {
        background: '#FFFFFF',
        border: '1px solid #100113',
        borderRadius: '4px',
        boxShadow:
          '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  MuiPickersToolbar: {
    toolbar: {
      backgroundColor: lightBlue.A200,
    },
  },
  MuiPickersCalendarHeader: {
    iconButton: {
      backgroundColor: 'white',
    },
  },
  MuiPickerDTTabs: {
    tabs: {
      backgroundColor: lightBlue.A200,
    },
  },
  switchHeader: {
    // backgroundColor: 'unset',
    color: 'white',
  },
  MuiPickersDay: {
    day: {
      color: lightBlue.A700,
    },
    daySelected: {
      backgroundColor: lightBlue['400'],
    },
    dayDisabled: {
      color: lightBlue['100'],
    },
    current: {
      color: lightBlue['900'],
    },
  },

  MuiPickersModal: {
    dialogRoot: {
      backgroundColor: 'white',
    },
    dialogAction: {
      color: lightBlue['400'],
    },
  },
};

export default overrides;
