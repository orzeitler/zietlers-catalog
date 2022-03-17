import {makeStyles} from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        backgroundSize: 'contain'
    },
    cardActions: {
        display: 'flex',
        direction: 'rtl',
        padding: '10px',
        justifyContent: 'space-between'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        direction: 'rtl'
    },
    text: {
        direction: 'rtl'
    }

}));