const path = require('path')
const express = require('express');

const app = express();


app.get('/api/mapinfo', (req, res) => {
  const statuses = ['open', 'closed', 'offline', 'unavailable'];
  const statusIndex = Math.floor((Math.random() * 4) + 1) - 1;
  const personIndex = Math.floor((Math.random() * 4) + 1) - 1;

  const markers = [{
    id: 'center',
    color: 'cyan',
    zLevel: 2,
    lng: 10.40345319777117,
    lat: 63.433307484435176,
    type: 'default'
  }, {
    id: 'toilet',
    color: 'purple',
    zLevel: 2,
    lng: 10.40337875601233,
    lat: 63.43334735154767,
    type: 'default'
  }, {
    id: 'fridge',
    color: 'white',
    zLevel: 2,
    lng: 10.403530958655665,
    lat: 63.43324068565397,
    shape: 'circle',
    type: 'item',
    status: statuses[statusIndex]
  }];

  const popups = [{
    id: 'center',
    closeOnClick: true,
    offset: [0, -27],
    html: '<h3>Webstep Trondheim</h3>'
    + '<p style="max-width: 160px; text-align: left;">'
    + 'Kjøpmannsgata 42<br/>'
    + '7010 Trondheim<br/>'
    + '<a href="https://www.webstep.no">Besøk oss</a>'
    + '</p>'
  }, {
    id: 'toilet',
    closeOnClick: true,
    offset: [0, -27],
    html: '<h3>Toilets</h3>'
    + '<p style="max-width: 160px; text-align: left;">'
    + 'Amount: 2'
    + '</p>'
  }, {
    id: 'fridge',
    closeOnClick: true,
    offset: [0, -27],
    html: '<h3>Fridge</h3>'
    + '<p style="max-width: 160px; text-align: left;">'
    + 'Status: ' + statuses[statusIndex]
    + '</p>'
  }];

  const persons = [{
    id: 'person1',
    color: 'pink',
    zLevel: 2,
    lng: 10.403385631056636,
    lat: 63.43328034082501,
    shape: 'circle',
    type: 'person',
    size: 25
  }, {
    id: 'person2',
    color: 'blue',
    zLevel: 2,
    lng: 10.403239592230193,
    lat: 63.43331681505077,
    shape: 'circle',
    type: 'person',
    size: 25
  }, {
    id: 'person3',
    color: 'yellow',
    zLevel: 2,
    lng: 10.403671070587336,
    lat: 63.43334395863167,
    shape: 'circle',
    type: 'person',
    size: 25
  }, {
    id: 'person4',
    color: 'black',
    zLevel: 2,
    lng: 10.403314508249764,
    lat: 63.43336007512005,
    shape: 'circle',
    type: 'person',
    size: 25
  }];

  const data = {
    // markers: [{'id':'person1','color':'pink','zLevel':2,'lng':10.403492078191135,'lat':63.43338353745003,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403500612936767,'lat':63.433381840980985,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403505828604324,'lat':63.43338035656666,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403515311636227,'lat':63.43337844803878,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403520527320723,'lat':63.43337738774542,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403528113746177,'lat':63.433376327448286,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403533803582263,'lat':63.43337526715487,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.4035371226434,'lat':63.433374418920096,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403539967552945,'lat':63.43337357068532,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403543286614166,'lat':63.43337229832932,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403546605675274,'lat':63.43337102597704,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403553243814514,'lat':63.43337017774215,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403557037027326,'lat':63.43336826920978,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403560356088406,'lat':63.43336657273983,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403566045907553,'lat':63.433365936563575,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403570787440458,'lat':63.43336487626598,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40357315819844,'lat':63.4333642400897,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403580270472304,'lat':63.43336445214845,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40358548613986,'lat':63.433366148622326,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403588805217993,'lat':63.43336678479858,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403594495037083,'lat':63.43336657273983,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40359876240143,'lat':63.433365300387294,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403602555614185,'lat':63.43336402803092,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403604452237488,'lat':63.433361907443185,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403603978068986,'lat':63.43336042302781,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403603978068986,'lat':63.433359150675045,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403603503917395,'lat':63.43335809038098,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403603503917395,'lat':63.43335639390662,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403604452237488,'lat':63.433353849200586,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403605400540727,'lat':63.43335088037284,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403604452237488,'lat':63.433348335662544,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403604926389107,'lat':63.433344306539624,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403605400540727,'lat':63.43334133771086,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40360634884388,'lat':63.43333942918039,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403611564511408,'lat':63.43333688446907,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403617728482146,'lat':63.43333370358434,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403621521694845,'lat':63.43333073475446,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403623418318233,'lat':63.43332882621945,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403625789076187,'lat':63.433326069451965,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40362815983417,'lat':63.43332373679851,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403632901350079,'lat':63.43332055590852,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403635272108033,'lat':63.43331885943576,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403637168714397,'lat':63.43331525442696,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403640013640995,'lat':63.43331228559521,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40364096194412,'lat':63.433309104703966,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.4036404877925,'lat':63.433306559993724,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.4036404877925,'lat':63.433304439397915,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403640013640995,'lat':63.433301894687276,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403640013640995,'lat':63.4332989258541,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403637642866045,'lat':63.43329616907991,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403636694562806,'lat':63.43329383642785,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403635746259681,'lat':63.433291927890394,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403634797956414,'lat':63.433290655534535,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40363384965329,'lat':63.43328853493753,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403632901350079,'lat':63.433286414344195,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40362721153096,'lat':63.433282597271955,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40362673737937,'lat':63.43327899225858,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403621521694845,'lat':63.433275387244805,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403618202633737,'lat':63.43327114605219,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403615357724163,'lat':63.433267753096914,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403609193753482,'lat':63.43326499631971,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403601607310975,'lat':63.433261179244624,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403596391643504,'lat':63.4332584224706,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403591175975947,'lat':63.43325736216906,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403582167078696,'lat':63.43325524157336,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403573632350032,'lat':63.43325460539464,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403564149301218,'lat':63.43325375715253,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403555614572497,'lat':63.433254393335034,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403547079826865,'lat':63.43325545363294,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403542338310928,'lat':63.43325630187124,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403536648491752,'lat':63.43325799835148,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40352953620095,'lat':63.433260331006494,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403525742988194,'lat':63.43326308778413,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403518156562711,'lat':63.433266480739974,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403514363332988,'lat':63.43326860133482,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403511992575005,'lat':63.4332707219333,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40350962181708,'lat':63.43327305458726,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403506776907477,'lat':63.43327559930424,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403505828604324,'lat':63.43327835608039,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403500612936767,'lat':63.4332821731532,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403497293858663,'lat':63.4332840816875,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403493026494317,'lat':63.433287686700254,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403487336675227,'lat':63.433290867593854,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403475482868373,'lat':63.433295744961384,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40346884474613,'lat':63.43329850173561,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403464103230164,'lat':63.43330104644656,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403460310000469,'lat':63.43330253086495,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403454620181321,'lat':63.433304439397915,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403447507907401,'lat':63.43330634793452,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403441818071315,'lat':63.433307620289696,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403434705797451,'lat':63.43330868058561,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403425222748638,'lat':63.433309316763115,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403414791413581,'lat':63.43331058912193,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403408153274285,'lat':63.43331228559521,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40339914439403,'lat':63.43331398207215,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.4033925062717,'lat':63.43331525442696,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403385393980841,'lat':63.43331567854523,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403379230010131,'lat':63.43331652678171,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40337354019104,'lat':63.43331610266347,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40336595374859,'lat':63.43331631472262,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403354099941737,'lat':63.43331801119933,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.4033441427583,'lat':63.433319707672126,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403338927090743,'lat':63.43332013179034,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403335608012611,'lat':63.43332055590852,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403329918193492,'lat':63.43332161620776,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403326599132384,'lat':63.43332225238501,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403322331768038,'lat':63.43332352473945,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40331711608357,'lat':63.43332479709383,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40331474532556,'lat':63.433326069451965,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403310952112804,'lat':63.43332755386527,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40330858135485,'lat':63.43332840210141,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40330336568735,'lat':63.433327765924304,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40330004660919,'lat':63.433326917688134,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403297201699644,'lat':63.43332373679851,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403295779244871,'lat':63.43332267650314,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403293882638508,'lat':63.43332034384943,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403291511880525,'lat':63.433318435317545,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40328866697098,'lat':63.43331652678171,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403283451286512,'lat':63.43331398207215,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403280132225376,'lat':63.43331164941776,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403277287315746,'lat':63.43330974088525,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403273494103075,'lat':63.43330825646723,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403266381812188,'lat':63.43330634793452,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403258321235086,'lat':63.43330571175693,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403247889883033,'lat':63.433305923816135,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40324077760917,'lat':63.43330783234887,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403230820408737,'lat':63.43331207353603,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403224656438027,'lat':63.43331801119933,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403222759831635,'lat':63.433321828266855,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403223233983198,'lat':63.43332416091664,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40322655304439,'lat':63.43332755386527,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403230346257146,'lat':63.43333031063645,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.403238881002807,'lat':63.433334127702324,'shape':'circle','type':'person','size':10},{'id':'person1','color':'pink','zLevel':2,'lng':10.40325452802233,'lat':63.43333709652802,'shape':'circle','type':'person','size':10}],
    markers: [{
      id: 'center',
      color: 'cyan',
      zLevel: 2,
      lng: 10.40345319777117,
      lat: 63.433307484435176,
      popup: {
        closeOnClick: true,
        offset: [0, -27],
        html: '<h3>Webstep Trondheim</h3>'
          + '<p style="max-width: 160px; text-align: left;">'
          + 'Kjøpmannsgata 42<br/>'
          + '7010 Trondheim<br/>'
          + '<a href="https://www.webstep.no">Besøk oss</a>'
          + '</p>',
      },
    }, {
      id: 'toilet',
      color: 'purple',
      zLevel: 2,
      lng: 10.40337875601233,
      lat: 63.43334735154767,
      popup: {
        closeOnClick: true,
        offset: [0, -27],
        html: '<h3>Toilets</h3>'
          + '<p style="max-width: 160px; text-align: left;">'
          + 'Amount: 2'
          + '</p>',
      },
    }],
    items: [{
      id: 'fridge',
      color: 'white',
      zLevel: 2,
      lng: 10.403530958655665,
      lat: 63.43324068565397,
      shape: 'circle',
      status: statuses[statusIndex],
      popup: {
        closeOnClick: true,
        offset: [0, -27],
        html: `${'<h3>Fridge</h3>'
          + '<p style="max-width: 160px; text-align: left;">'
          + 'Status: '}${statuses[statusIndex]}</p>`,
      },
    }],
    persons: [{
      id: 'person1',
      color: 'lightblue',
      size: 10,
      zLevel: 2,
      shape: 'circle',
      coordinates: [
        {'lng':10.403508199362307,'lat':63.433375903330926,'timestamp':1547813086097,'tag':1, popup: {
          closeOnClick: true,
          offset: [0, -27],
          html: '<h3>Start of route</h3>'
            + '<p style="max-width: 160px; text-align: left;">'
            + 'Timestamp: 1547813086097</p>'
            + '<p style="max-width: 160px; text-align: left;">'
            + 'Tag: 1</p>',
        }
      },
        {'lng':10.403521001472228,'lat':63.433374418920096,'timestamp':1547813087754,'tag':1},
        {'lng':10.403529062049387,'lat':63.43337208627062,'timestamp':1547813088270,'tag':1},
        {'lng':10.403536648491752,'lat':63.43337060185962,'timestamp':1547813088722,'tag':1},
        {'lng':10.403545183220501,'lat':63.43336826920978,'timestamp':1547813089104,'tag':1},
        {'lng':10.403556088724116,'lat':63.43336657273983,'timestamp':1547813089538,'tag':1},
        {'lng':10.403563675149599,'lat':63.433365512446045,'timestamp':1547813089952,'tag':1},
        {'lng':10.403568416665564,'lat':63.43336466420723,'timestamp':1547813090334,'tag':1},
        {'lng':10.403582167078696,'lat':63.433362755678274,'timestamp':1547813090716,'tag':1},
        {'lng':10.403590227672737,'lat':63.433359362733825,'timestamp':1547813091128,'tag':1},
        {'lng':10.403594495037083,'lat':63.43335406125945,'timestamp':1547813091548,'tag':1},
        {'lng':10.403596391643504,'lat':63.43334982007849,'timestamp':1547813091950,'tag':1},
        {'lng':10.403597339946657,'lat':63.43334473065747,'timestamp':1547813092354,'tag':1},
        {'lng':10.403599236553049,'lat':63.433339853298264,'timestamp':1547813094737,'tag':1},
        {'lng':10.40360634884388,'lat':63.43333688446907,'timestamp':1547813095277,'tag':1},
        {'lng':10.40361393526939,'lat':63.43333476387926,'timestamp':1547813095651,'tag':1},
        {'lng':10.403621521694845,'lat':63.43333221916754,'timestamp':1547813096034,'tag':1},
        {'lng':10.403630530592125,'lat':63.433330098577414,'timestamp':1547813096445,'tag':1},
        {'lng':10.40364096194412,'lat':63.43332734180623,'timestamp':1547813096822,'tag':1},
        {'lng':10.40364712591483,'lat':63.4333258573929,'timestamp':1547813097203,'tag':1},
        {'lng':10.403658031418473,'lat':63.433323100621294,'timestamp':1547813097603,'tag':1},
        {'lng':10.40365992802478,'lat':63.43332034384943,'timestamp':1547813097887,'tag':1},
        {'lng':10.403659453873246,'lat':63.43331483030869,'timestamp':1547813098224,'tag':1},
        {'lng':10.403657083098352,'lat':63.43331186147688,'timestamp':1547813098644,'tag':1},
        {'lng':10.403639065320789,'lat':63.433311225299434,'timestamp':1547813098989,'tag':1},
        {'lng':10.40362626322775,'lat':63.43331207353603,'timestamp':1547813099326,'tag':1},
        {'lng':10.403609667905044,'lat':63.43331377001303,'timestamp':1547813099651,'tag':1},
        {'lng':10.403590227672737,'lat':63.43331504236784,'timestamp':1547813099979,'tag':1},
        {'lng':10.403575054804804,'lat':63.43331673884086,'timestamp':1547813100312,'tag':1},
        {'lng':10.403566994210763,'lat':63.43331610266347,'timestamp':1547813100556,'tag':1},
        {'lng':10.403562726846445,'lat':63.433312709713476,'timestamp':1547813100871,'tag':1},
        {'lng':10.403569839137305,'lat':63.43330783234887,'timestamp':1547813101171,'tag':1},
        {'lng':10.403582167078696,'lat':63.43330422733868,'timestamp':1547813101464,'tag':1},
        {'lng':10.40359876240143,'lat':63.433299137913366,'timestamp':1547813101742,'tag':1},
        {'lng':10.403610616208255,'lat':63.43329616907991,'timestamp':1547813102019,'tag':1},
        {'lng':10.403622944166614,'lat':63.4332932002462,'timestamp':1547813102304,'tag':1},
        {'lng':10.403633375501698,'lat':63.43328980729726,'timestamp':1547813102649,'tag':1},
        {'lng':10.403631953046926,'lat':63.43328238521258,'timestamp':1547813103130,'tag':1},{'lng':10.403625789076187,'lat':63.43327559930424,'timestamp':1547813103781,'tag':1},{'lng':10.403622470015023,'lat':63.433270297814374,'timestamp':1547813104232,'tag':1},{'lng':10.403615357724163,'lat':63.433267328977934,'timestamp':1547813105410,'tag':1},{'lng':10.403616780178936,'lat':63.43326266366509,'timestamp':1547813105746,'tag':1},{'lng':10.40361393526939,'lat':63.43325905864924,'timestamp':1547813106076,'tag':1},{'lng':10.403611090359846,'lat':63.433257150109455,'timestamp':1547813106444,'tag':1},{'lng':10.403604926389107,'lat':63.43325418127549,'timestamp':1547813106736,'tag':1},{'lng':10.403603029765748,'lat':63.433253545092924,'timestamp':1547813106975,'tag':1},{'lng':10.4035959174918,'lat':63.433252060675784,'timestamp':1547813107337,'tag':1},{'lng':10.40358643444307,'lat':63.43325184861618,'timestamp':1547813107660,'tag':1},{'lng':10.403581218775543,'lat':63.43325184861618,'timestamp':1547813107906,'tag':1},{'lng':10.403575054804804,'lat':63.43325163655658,'timestamp':1547813108200,'tag':1},{'lng':10.403555939969124,'lat':63.43325020065086,'timestamp':1547813108716,'tag':1},{'lng':10.403550250133065,'lat':63.433249140349005,'timestamp':1547813109062,'tag':1},{'lng':10.403544560313918,'lat':63.433247443872006,'timestamp':1547813109429,'tag':1},{'lng':10.403537922191646,'lat':63.43324680769308,'timestamp':1547813109857,'tag':1},{'lng':10.40352749083965,'lat':63.433249140349005,'timestamp':1547813110239,'tag':1},{'lng':10.403523697626895,'lat':63.43324998858745,'timestamp':1547813110667,'tag':1},{'lng':10.403522749323685,'lat':63.43325359360446,'timestamp':1547813110989,'tag':1},{'lng':10.403525594233258,'lat':63.43325613832317,'timestamp':1547813111312,'tag':1},{'lng':10.403525594233258,'lat':63.433257622740115,'timestamp':1547813111642,'tag':1},{'lng':10.40352512008161,'lat':63.43326143981568,'timestamp':1547813111972,'tag':1},{'lng':10.403524645930048,'lat':63.433261863934746,'timestamp':1547813112205,'tag':1},{'lng':10.403522275172065,'lat':63.43326525689071,'timestamp':1547813112557,'tag':1},{'lng':10.403513740426462,'lat':63.43326716542995,'timestamp':1547813112849,'tag':1},{'lng':10.40351089551686,'lat':63.43326758954893,'timestamp':1547813113142,'tag':1},{'lng':10.40350425739453,'lat':63.43326758954893,'timestamp':1547813113419,'tag':1},{'lng':10.403499041710091,'lat':63.43326886190579,'timestamp':1547813113704,'tag':1},{'lng':10.40349572264887,'lat':63.433272466920414,'timestamp':1547813113988,'tag':1},{'lng':10.403499041710091,'lat':63.433275435756315,'timestamp':1547813114229,'tag':1},{'lng':10.40350615400095,'lat':63.43327670811283,'timestamp':1547813114507,'tag':1},{'lng':10.403513740426462,'lat':63.43327776840988,'timestamp':1547813114799,'tag':1},{'lng':10.403521801020474,'lat':63.43327904077012,'timestamp':1547813115152,'tag':1},{'lng':10.403527964991213,'lat':63.43328073724527,'timestamp':1547813115429,'tag':1},{'lng':10.403523697626895,'lat':63.433285826673824,'timestamp':1547813115737,'tag':1},{'lng':10.403518481959338,'lat':63.433288159330374,'timestamp':1547813116037,'tag':1},{'lng':10.40351089551686,'lat':63.433290067868086,'timestamp':1547813116337,'tag':1},{'lng':10.403500464181832,'lat':63.43329282463907,'timestamp':1547813116685,'tag':1},{'lng':10.403489084526626,'lat':63.433295581413574,'timestamp':1547813117005,'tag':1},{'lng':10.403483394707507,'lat':63.43329685376921,'timestamp':1547813117319,'tag':1},{'lng':10.403466325233182,'lat':63.43329918642482,'timestamp':1547813117642,'tag':1},{'lng':10.403463006155079,'lat':63.43329982260258,'timestamp':1547813117949,'tag':1},{'lng':10.403455893881187,'lat':63.43330067083954,'timestamp':1547813118242,'tag':1},{'lng':10.403448781607239,'lat':63.43330109495801,'timestamp':1547813118481,'tag':1},{'lng':10.403443091771209,'lat':63.43330003466181,'timestamp':1547813118759,'tag':1},{'lng':10.403440246861607,'lat':63.433299610543315,'timestamp':1547813119007,'tag':1},{'lng':10.403436453648823,'lat':63.433298974365584,'timestamp':1547813119384,'tag':1},{'lng':10.40342934137496,'lat':63.433297277887704,'timestamp':1547813119945,'tag':1},{'lng':10.403426022296856,'lat':63.43329982260258,'timestamp':1547813120762,'tag':1},{'lng':10.403424599842054,'lat':63.43330279143561,'timestamp':1547813121106,'tag':1},{'lng':10.403420332477793,'lat':63.4333057602646,'timestamp':1547813121407,'tag':1},{'lng':10.403419384174526,'lat':63.43330639644594,'timestamp':1547813121662,'tag':1},{'lng':10.40340800451932,'lat':63.43330851703786,'timestamp':1547813122008,'tag':1},{'lng':10.403403263003383,'lat':63.433309789392894,'timestamp':1547813122419,'tag':1},{'lng':10.403398047335884,'lat':63.433311697929184,'timestamp':1547813123409,'tag':1},{'lng':10.403389512590223,'lat':63.43331275822493,'timestamp':1547813123785,'tag':1},{'lng':10.403375288042469,'lat':63.43331487882017,'timestamp':1547813125404,'tag':1},{'lng':10.40336722744837,'lat':63.43331721147052,'timestamp':1547813125794,'tag':1},{'lng':10.403359166871269,'lat':63.43331890794718,'timestamp':1547813126162,'tag':1},{'lng':10.403348735519273,'lat':63.43332060441995,'timestamp':1547813126515,'tag':1},{'lng':10.403336407560857,'lat':63.433321240597195,'timestamp':1547813126851,'tag':1},{'lng':10.403327398680602,'lat':63.43332166471538,'timestamp':1547813127204,'tag':1},{'lng':10.403321708861483,'lat':63.4333225129555,'timestamp':1547813127550,'tag':1},{'lng':10.403319812238124,'lat':63.433324633546164,'timestamp':1547813127916,'tag':1},{'lng':10.403319812238124,'lat':63.43332866267184,'timestamp':1547813128281,'tag':1},{'lng':10.403320760541334,'lat':63.43333247973794,'timestamp':1547813128630,'tag':1},{'lng':10.403322183013074,'lat':63.43333417621369,'timestamp':1547813128929,'tag':1},{'lng':10.40332645037742,'lat':63.43333629680353,'timestamp':1547813129590,'tag':1},{'lng':10.403330243590176,'lat':63.43334138622225,'timestamp':1547813129979,'tag':1},{'lng':10.403335459257704,'lat':63.433348596232804,'timestamp':1547813130355,'tag':1},{'lng':10.403336407560857,'lat':63.433351989178504,'timestamp':1547813130714,'tag':1},{'lng':10.403339252470431,'lat':63.43335750271211,'timestamp':1547813131104,'tag':1},{'lng':10.403328821135403,'lat':63.433361743895716,'timestamp':1547813131487,'tag':1},{'lng':10.403319338086618,'lat':63.433362168013275,'timestamp':1547813131886,'tag':1},{'lng':10.40330511353875,'lat':63.433360683597954,'timestamp':1547813132222,'tag':1},{'lng':10.403303216915418,'lat':63.43335898712755,'timestamp':1547813132560,'tag':1},{'lng':10.403303216915418,'lat':63.43335644241799,'timestamp':1547813132904,'tag':1},{'lng':10.40330511353875,'lat':63.43335389771195,'timestamp':1547813133242,'tag':1},{'lng':10.403307958448323,'lat':63.433349656530964,'timestamp':1547813133550,'tag':1},{'lng':10.403310329206306,'lat':63.43334605152606,'timestamp':1547813133916,'tag':1},{'lng':10.403310329206306,'lat':63.433343506815305,'timestamp':1547813134276,'tag':1},{'lng':10.403311277509431,'lat':63.43334075004543,'timestamp':1547813134607,'tag':1},{'lng':10.403311277509431,'lat':63.43333841739701,'timestamp':1547813134989,'tag':1},{'lng':10.403308906751505,'lat':63.43333650886251,'timestamp':1547813135335,'tag':1},{'lng':10.40330558769034,'lat':63.43333502444966,'timestamp':1547813135749,'tag':1},{'lng':10.403296104641527,'lat':63.43333544856759,'timestamp':1547813136017,'tag':1},{'lng':10.403290888973999,'lat':63.4333356606266,'timestamp':1547813136226,'tag':1},{'lng':10.40326865013418,'lat':63.43333650886922,'timestamp':1547813136683,'tag':1},{'lng':10.403253951434777,'lat':63.433337357105074,'timestamp':1547813137030,'tag':1},{'lng':10.403239726869998,'lat':63.43333820534474,'timestamp':1547813137352,'tag':1},{'lng':10.403222657395702,'lat':63.43333332798065,'timestamp':1547813137682,'tag':1},{'lng':10.40321412265007,'lat':63.433329722977476,'timestamp':1547813138146,'tag':1},{'lng':10.403209855285724,'lat':63.4333271782653,'timestamp':1547813139168,'tag':1},{'lng':10.40320701037615,'lat':63.433319544131194,'timestamp':1547813139460,'tag':1},{'lng':10.403206062072968,'lat':63.43331339440908,'timestamp':1547813139744,'tag':1},{'lng':10.403207958679303,'lat':63.43330830498536,'timestamp':1547813140077,'tag':1},{'lng':10.403213648498479,'lat':63.433303639679224,'timestamp':1547813140389,'tag':1},{'lng':10.403224079850418,'lat':63.43329961055002,'timestamp':1547813140750,'tag':1},{'lng':10.403234985337122,'lat':63.4332974899537,'timestamp':1547813141064,'tag':1},{'lng':10.403245416689145,'lat':63.4332962175981,'timestamp':1547813141380,'tag':1},{'lng':10.403259641253868,'lat':63.4332962175981,'timestamp':1547813141695,'tag':1},{'lng':10.403266279376197,'lat':63.43330151908319,'timestamp':1547813142010,'tag':1},{'lng':10.403266753527788,'lat':63.43331063764009,'timestamp':1547813142310,'tag':1},{'lng':10.403260589557078,'lat':63.43331466676773,'timestamp':1547813142609,'tag':1},{'lng':10.403250632356674,'lat':63.43331615118163,'timestamp':1547813143052,'tag':1, popup: {
          closeOnClick: true,
          offset: [0, -27],
          html: '<h3>End of route</h3>'
            + '<p style="max-width: 160px; text-align: left;">'
            + 'Timestamp: 1547813143052</p>'
            + '<p style="max-width: 160px; text-align: left;">'
            + 'Tag: 1</p>',
        }}],
      }, {
        id: 'person2',
        color: 'magenta',
        size: 10,
        zLevel: 2,
        shape: 'circle',
        coordinates: [{"lng":10.403241251760733,"lat":63.4333614833256,"timestamp":1547816842988,"tag":1, popup: {
          closeOnClick: true,
          offset: [0, -27],
          html: '<h3>Start of route</h3>'
            + '<p style="max-width: 160px; text-align: left;">'
            + 'Timestamp: 1547816842988</p>'
            + '<p style="max-width: 160px; text-align: left;">'
            + 'Tag: 1</p>',
        }},{"lng":10.403236510244824,"lat":63.433359150675045,"timestamp":1547816843449,"tag":1},{"lng":10.40323319118366,"lat":63.43335618184781,"timestamp":1547816844003,"tag":1},{"lng":10.403227975499163,"lat":63.433351516549436,"timestamp":1547816844474,"tag":1},{"lng":10.40322702719601,"lat":63.433348335662544,"timestamp":1547816845007,"tag":1},{"lng":10.403241725912324,"lat":63.43334261006825,"timestamp":1547816845485,"tag":1},{"lng":10.403258321235086,"lat":63.43333942918039,"timestamp":1547816846056,"tag":1},{"lng":10.403278709770547,"lat":63.43333582417418,"timestamp":1547816846595,"tag":1},{"lng":10.403298150002854,"lat":63.43333306740354,"timestamp":1547816847119,"tag":1},{"lng":10.40330952965806,"lat":63.433332431226546,"timestamp":1547816847593,"tag":1},{"lng":10.403313322870815,"lat":63.43332988651841,"timestamp":1547816848973,"tag":1},{"lng":10.403316641931951,"lat":63.433325009152895,"timestamp":1547816849452,"tag":1},{"lng":10.403319486841497,"lat":63.43332331268036,"timestamp":1547816849978,"tag":1},{"lng":10.403326599132384,"lat":63.43332204032589,"timestamp":1547816850468,"tag":1},{"lng":10.403338452939181,"lat":63.433324372975704,"timestamp":1547816850939,"tag":1},{"lng":10.403348410122646,"lat":63.43332797798334,"timestamp":1547816851456,"tag":1},{"lng":10.403354574093356,"lat":63.433335187997244,"timestamp":1547816851942,"tag":1},{"lng":10.403359315626204,"lat":63.433339005062464,"timestamp":1547816852423,"tag":1},{"lng":10.403390609648397,"lat":63.43333752064973,"timestamp":1547816853143,"tag":1},{"lng":10.403407679122694,"lat":63.433337308587,"timestamp":1547816853744,"tag":1},{"lng":10.403417162171536,"lat":63.43333221916754,"timestamp":1547816854448,"tag":1},{"lng":10.403412894807133,"lat":63.433327765924304,"timestamp":1547816854868,"tag":1},{"lng":10.403397247787694,"lat":63.433328190042374,"timestamp":1547816855476,"tag":1},{"lng":10.40338397152604,"lat":63.43332967445937,"timestamp":1547816856024,"tag":1},{"lng":10.403366902051744,"lat":63.43333158299052,"timestamp":1547816856595,"tag":1},{"lng":10.403361686384216,"lat":63.43332925033752,"timestamp":1547816857156,"tag":1},{"lng":10.403361686384216,"lat":63.43332479709383,"timestamp":1547816857688,"tag":1},{"lng":10.403381600768085,"lat":63.43332055590852,"timestamp":1547816858242,"tag":1},{"lng":10.403389661345187,"lat":63.43331885943576,"timestamp":1547816858810,"tag":1},{"lng":10.403405782516359,"lat":63.43331483030869,"timestamp":1547816859308,"tag":1},{"lng":10.403417162171536,"lat":63.43330974088525,"timestamp":1547816859976,"tag":1},{"lng":10.403420955384263,"lat":63.433305499693944,"timestamp":1547816860501,"tag":1},{"lng":10.403423800293893,"lat":63.433299774091125,"timestamp":1547816861011,"tag":1},{"lng":10.403423800293893,"lat":63.43329638113917,"timestamp":1547816861412,"tag":1},{"lng":10.403421429535882,"lat":63.43329277612759,"timestamp":1547816862976,"tag":1},{"lng":10.40341811047469,"lat":63.433287686700254,"timestamp":1547816863396,"tag":1},{"lng":10.403410049897644,"lat":63.43327962843682,"timestamp":1547816863886,"tag":1},{"lng":10.403402463455166,"lat":63.43326902545377,"timestamp":1547816864423,"tag":1},{"lng":10.403395825332893,"lat":63.433265420438715,"timestamp":1547816864909,"tag":1},{"lng":10.403375436797376,"lat":63.433268177215865,"timestamp":1547816865511,"tag":1},{"lng":10.403357893171489,"lat":63.433272630468394,"timestamp":1547816865968,"tag":1},{"lng":10.403328021587157,"lat":63.4332777198984,"timestamp":1547816866411,"tag":1},{"lng":10.403304788142123,"lat":63.43328111285251,"timestamp":1547816866921,"tag":1},{"lng":10.403296253396434,"lat":63.43328450580623,"timestamp":1547816867295,"tag":1},{"lng":10.40330952965806,"lat":63.43329447260572,"timestamp":1547816867754,"tag":1},{"lng":10.403315693628798,"lat":63.433301894687276,"timestamp":1547816868369,"tag":1},{"lng":10.403321857616447,"lat":63.43330698411211,"timestamp":1547816868782,"tag":1},{"lng":10.403331340648322,"lat":63.43330634793452,"timestamp":1547816869193,"tag":1},{"lng":10.403339875393982,"lat":63.43330125850579,"timestamp":1547816869545,"tag":1},{"lng":10.40334509106151,"lat":63.43329722937628,"timestamp":1547816869959,"tag":1},{"lng":10.403351255032192,"lat":63.433291927890394,"timestamp":1547816870341,"tag":1},{"lng":10.403356470716659,"lat":63.433287686700254,"timestamp":1547816870948,"tag":1, popup: {
          closeOnClick: true,
          offset: [0, -27],
          html: '<h3>End of route</h3>'
            + '<p style="max-width: 160px; text-align: left;">'
            + 'Timestamp: 1547816870948</p>'
            + '<p style="max-width: 160px; text-align: left;">'
            + 'Tag: 1</p>',
        }}]
      }],
  };
  res.send(data);
});

app.listen(8081, () => console.log('Server listening on port 8081!'));