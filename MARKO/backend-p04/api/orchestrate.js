// Fail closed until a durable, authenticated database and Drive OAuth are configured.
// Do not process client-supplied actions or expose credentials.
module.exports = function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Allow', 'GET');
  if (req.method !== 'GET') return res.status(405).json({code:'METHOD_NOT_ALLOWED'});
  return res.status(503).json({
    code:'INTEGRATIONS_NOT_CONFIGURED',
    message:'No autonomous dispatch, publication, campaigns or paid generation is enabled.',
    requirements:['PRIVATE_DATABASE','SERVER_SIDE_DRIVE_AUTH','APP_AUTH','APPROVAL_AUDIT']
  });
};
