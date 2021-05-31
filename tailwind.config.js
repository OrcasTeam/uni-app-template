const onlyWeiXin = require('./tailwind/only.mp-weixin.default.tailwind.config.js');
const WeiXinAndH5 = require('./tailwind/mp-h5.default.tailwind.config.js');

module.exports = {
  ...onlyWeiXin,
  mode: 'jit',
};
