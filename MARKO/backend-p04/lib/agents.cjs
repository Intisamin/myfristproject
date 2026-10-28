'use strict';
const AGENTS = Object.freeze([
  {id:'validadoncio',name:'Validadoncio',division:'DESCUBRE',role:'Valida el negocio y sus restricciones',status:'PLUGIN_INSTALLED'},
  {id:'negocioncio',name:'Negocioncio',division:'DESCUBRE',role:'Propuesta de valor, oferta y estrategia',status:'PLUGIN_INSTALLED'},
  {id:'ideoncio',name:'Ideoncio',division:'CONECTA',role:'Genera hipotesis e ideas de contenido',status:'PLUGIN_INSTALLED'},
  {id:'programoncio',name:'Programoncio',division:'CONECTA',role:'Organiza segmentos y calendario editorial',status:'SKILL_DEFINED'},
  {id:'libretoncio',name:'Libretoncio',division:'CONECTA',role:'Desarrolla y ajusta guiones',status:'SKILL_DEFINED'},
  {id:'recursoncio',name:'Recursoncio',division:'CONECTA',role:'Prompts imagen realista + animacion vinculados, QA de escenas',status:'SKILL_DEFINED'},
  {id:'produccioncio',name:'Produccioncio',division:'CONECTA',role:'Coordina generacion audiovisual bajo presupuesto',status:'SKILL_DEFINED'},
  {id:'editoncio',name:'Editoncio',division:'CONECTA',role:'Montaje, audio, subtitulos y portada',status:'SKILL_DEFINED'},
  {id:'revisioncio',name:'Revisioncio',division:'CONECTA',role:'Control tecnico, editorial y cumplimiento',status:'SKILL_DEFINED'},
  {id:'publiconcio',name:'Publiconcio',division:'CRECE',role:'Programa y publica solo con permiso humano',status:'SKILL_DEFINED'},
  {id:'analiticoncio',name:'Analiticoncio',division:'CRECE',role:'Metricas semanales y retroalimentacion a ideas',status:'SCHEDULED_CHATGPT'},
  {id:'campañoncio',name:'Campañoncio',division:'CRECE',role:'Propone campanas Meta, sin gastar hasta autorizacion',status:'SKILL_DEFINED'}
]);
module.exports={AGENTS};
