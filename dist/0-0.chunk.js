webpackJsonp([0],{1040:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(51),s=n(u),a=r(50),o=n(a),l=r(18),i=n(l),c=r(2),f=n(c),d=r(16),p=n(d),_=r(4),h=n(_),m=r(3),E=n(m),T=r(1),v=n(T),S=r(29),y=r(39);r(410);var x=r(408),g=n(x),A=r(75),L=n(A),O=function(e){function t(e){(0,f.default)(this,t);var r=(0,h.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return r.state={},r}return(0,E.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){var e=this;return this.props.userStatus?null:function(){var t=(0,o.default)(s.default.mark(function t(r){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.props.fetchUserStatus();case 2:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()(this)}},{key:"render",value:function(){return this.props.userStatus?v.default.createElement(y.Redirect,{to:"/auth"}):v.default.createElement("div",{className:"app-module login"},v.default.createElement("div",{className:"login__form-container"},v.default.createElement("h1",null,"TJLMS - 登录"),v.default.createElement(g.default,null)))}}]),t}(v.default.Component);O.propTypes={userStatus:T.PropTypes.object},O.defaultProps={userStatus:null};var R=function(e){return{userStatus:e.auth.userStatus}},j=function(e){return{dispatch:e,fetchUserStatus:function(){var t=(0,o.default)(s.default.mark(function t(){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,L.default.fetchUserStatusAsync(e)();case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}},t,void 0)}));return function(){return t.apply(this,arguments)}}()}},M=(0,S.connect)(R,j)(O);t.default=M;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(O,"LoginModule","/Users/joshoy/repo/TJLMS-FE/src/modules/login/index.jsx"),__REACT_HOT_LOADER__.register(R,"mapStateToProps","/Users/joshoy/repo/TJLMS-FE/src/modules/login/index.jsx"),__REACT_HOT_LOADER__.register(j,"mapDispatchesToProps","/Users/joshoy/repo/TJLMS-FE/src/modules/login/index.jsx"),__REACT_HOT_LOADER__.register(M,"default","/Users/joshoy/repo/TJLMS-FE/src/modules/login/index.jsx"))}()}});