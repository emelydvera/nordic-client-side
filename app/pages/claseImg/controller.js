const React = require ('react');
const View = require ('./view');

exports.render = function  render (req, res) {
    const ClaseImg = props => <View {...props}/>
    res.render (ClaseImg , {
        messaje: 'Hola Todos'
    })
}