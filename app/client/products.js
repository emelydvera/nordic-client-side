const React = require('react');
const hydrate = require('nordic/hydrate');
const ProductsView = require('../pages/products/view');
const ImageProvider = require('nordic/image/provider');

const { imagesPrefix } = window.__PRELOADED_STATE__;


hydrate(


    <ImageProvider prefix={imagesPrefix}>
        <ProductsView />
    </ImageProvider>

    , document.getElementById('root-app')

)