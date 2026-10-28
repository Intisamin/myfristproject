module.exports = function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') return res.status(405).json({code:'METHOD_NOT_ALLOWED'});
  return res.status(200).json({
    name:'MARKO', version:'0.4.0', mode:'P0.4_PROTECTED_PREVIEW',
    state:'SHELL_READY', database:'NOT_CONNECTED', googleDrive:'NOT_CONNECTED',
    agents:'NOT_CONNECTED', automaticPublishing:false, paidActions:false
  });
};
