var smartgrid = require('smart-grid');
const settings = 
{
        outputStyle: 'scss',
        columns: 12,
        offset: '30px',
        container: {
        maxWidth:'1170px',
        fields: '50px'
        },
        breakPoints: {
                lg: {
                        width:'960px',
                        fields:'20px' },
                md: {
                        width:'850px',
                        fields: '20px' }, 
                sm: {
                        width:'780px',
                        fields: '15px' }, 
                xs: {
                        width:'560px',
                        fields: '15px' }, 
        xxs: {
                width:'360px',
                fields:'10px' }

        },
        properties: [],
        oldSizeStyle: false
};
smartgrid('./resources/assets/sass', settings);