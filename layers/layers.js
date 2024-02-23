var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_feb23308frfeb23256_1 = new ol.format.GeoJSON();
var features_feb23308frfeb23256_1 = format_feb23308frfeb23256_1.readFeatures(json_feb23308frfeb23256_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_feb23308frfeb23256_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_feb23308frfeb23256_1.addFeatures(features_feb23308frfeb23256_1);
var lyr_feb23308frfeb23256_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_feb23308frfeb23256_1, 
                style: style_feb23308frfeb23256_1,
                interactive: false,
                title: '<img src="styles/legend/feb23308frfeb23256_1.png" /> feb-23-3-08 — fr-feb-23-2-56'
            });

lyr_CartoLight_0.setVisible(true);lyr_feb23308frfeb23256_1.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_feb23308frfeb23256_1];
lyr_feb23308frfeb23256_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'URL': 'URL', 'Title': 'Title', 'Alternative_Title': 'Alternative_Title', 'Photographer': 'Photographer', 'Architect': 'Architect', 'Date_of_Original': 'Date_of_Original', 'Geographic_Location': 'Geographic_Location', 'Subject__Topic': 'Subject__Topic', 'Type': 'Type', 'Form': 'Form', 'Medium': 'Medium', 'Extent': 'Extent', 'Collection': 'Collection', 'Source': 'Source', 'Repository': 'Repository', 'Rights': 'Rights', 'Contact_Information': 'Contact_Information', 'Identifier': 'Identifier', 'Address': 'Address', 'Photo': 'Photo', '______': '______', '_______2': '_______2', '_______3': '_______3', '_______4': '_______4', '_______5': '_______5', '_______6': '_______6', '_______7': '_______7', '_______8': '_______8', '_______9': '_______9', '_______10': '_______10', '_______11': '_______11', '_______12': '_______12', '_______13': '_______13', '_______14': '_______14', '_______15': '_______15', '_______16': '_______16', '_______17': '_______17', '_______18': '_______18', '_______19': '_______19', '_______20': '_______20', '_______21': '_______21', '_______22': '_______22', '_______23': '_______23', '_______24': '_______24', '_______25': '_______25', '_______26': '_______26', '_______27': '_______27', '_______28': '_______28', '_______29': '_______29', '_______30': '_______30', '_______31': '_______31', '_______32': '_______32', '_______33': '_______33', '_______34': '_______34', '_______35': '_______35', '_______36': '_______36', '_______37': '_______37', '_______38': '_______38', '_______39': '_______39', '_______40': '_______40', '_______41': '_______41', '_______42': '_______42', '_______43': '_______43', '_______44': '_______44', '_______45': '_______45', '_______46': '_______46', '_______47': '_______47', '_______48': '_______48', '_______49': '_______49', '_______50': '_______50', '_______51': '_______51', '_______52': '_______52', '_______53': '_______53', '_______54': '_______54', '_______55': '_______55', '_______56': '_______56', '_______57': '_______57', '_______58': '_______58', '_______59': '_______59', '_______60': '_______60', '_______61': '_______61', '_______62': '_______62', '_______63': '_______63', '_______64': '_______64', '_______65': '_______65', '_______66': '_______66', '_______67': '_______67', '_______68': '_______68', '_______69': '_______69', '_______70': '_______70', '_______71': '_______71', '_______72': '_______72', '_______73': '_______73', '_______74': '_______74', '_______75': '_______75', '_______76': '_______76', '_______77': '_______77', '_______78': '_______78', '_______79': '_______79', '_______80': '_______80', '_______81': '_______81', '_______82': '_______82', '_______83': '_______83', '_______84': '_______84', '_______85': '_______85', '_______86': '_______86', '_______87': '_______87', '_______88': '_______88', '_______89': '_______89', '_______90': '_______90', '_______91': '_______91', '_______92': '_______92', '_______93': '_______93', '_______94': '_______94', '_______95': '_______95', '_______96': '_______96', '_______97': '_______97', '_______98': '_______98', '_______99': '_______99', '_______100': '_______100', '_______101': '_______101', '_______102': '_______102', '_______103': '_______103', '_______104': '_______104', '_______105': '_______105', '_______106': '_______106', '_______107': '_______107', '_______108': '_______108', '_______109': '_______109', '_______110': '_______110', '_______111': '_______111', '_______112': '_______112', '_______113': '_______113', '_______114': '_______114', '_______115': '_______115', '_______116': '_______116', '_______117': '_______117', '_______118': '_______118', '_______119': '_______119', '_______120': '_______120', '_______121': '_______121', '_______122': '_______122', '_______123': '_______123', '_______124': '_______124', '_______125': '_______125', '_______126': '_______126', '_______127': '_______127', '_______128': '_______128', '_______129': '_______129', '_______130': '_______130', '_______131': '_______131', '_______132': '_______132', '_______133': '_______133', '_______134': '_______134', '_______135': '_______135', '_______136': '_______136', '_______137': '_______137', '_______138': '_______138', '_______139': '_______139', '_______140': '_______140', '_______141': '_______141', '_______142': '_______142', '_______143': '_______143', '_______144': '_______144', '_______145': '_______145', '_______146': '_______146', '_______147': '_______147', '_______148': '_______148', '_______149': '_______149', '_______150': '_______150', '_______151': '_______151', '_______152': '_______152', '_______153': '_______153', '_______154': '_______154', '_______155': '_______155', '_______156': '_______156', '_______157': '_______157', '_______158': '_______158', '_______159': '_______159', '_______160': '_______160', '_______161': '_______161', '_______162': '_______162', '_______163': '_______163', '_______164': '_______164', '_______165': '_______165', '_______166': '_______166', '_______167': '_______167', '_______168': '_______168', '_______169': '_______169', '_______170': '_______170', '_______171': '_______171', '_______172': '_______172', '_______173': '_______173', '_______174': '_______174', '_______175': '_______175', '_______176': '_______176', '_______177': '_______177', '_______178': '_______178', '_______179': '_______179', '_______180': '_______180', '_______181': '_______181', '_______182': '_______182', '_______183': '_______183', '_______184': '_______184', '_______185': '_______185', '_______186': '_______186', '_______187': '_______187', });
lyr_feb23308frfeb23256_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'URL': 'TextEdit', 'Title': 'TextEdit', 'Alternative_Title': 'TextEdit', 'Photographer': 'TextEdit', 'Architect': 'TextEdit', 'Date_of_Original': 'TextEdit', 'Geographic_Location': 'TextEdit', 'Subject__Topic': 'TextEdit', 'Type': 'TextEdit', 'Form': 'TextEdit', 'Medium': 'TextEdit', 'Extent': 'TextEdit', 'Collection': 'TextEdit', 'Source': 'TextEdit', 'Repository': 'TextEdit', 'Rights': 'TextEdit', 'Contact_Information': 'TextEdit', 'Identifier': 'TextEdit', 'Address': 'TextEdit', 'Photo': 'TextEdit', '______': 'TextEdit', '_______2': 'TextEdit', '_______3': 'TextEdit', '_______4': 'TextEdit', '_______5': 'TextEdit', '_______6': 'TextEdit', '_______7': 'TextEdit', '_______8': 'TextEdit', '_______9': 'TextEdit', '_______10': 'TextEdit', '_______11': 'TextEdit', '_______12': 'TextEdit', '_______13': 'TextEdit', '_______14': 'TextEdit', '_______15': 'TextEdit', '_______16': 'TextEdit', '_______17': 'TextEdit', '_______18': 'TextEdit', '_______19': 'TextEdit', '_______20': 'TextEdit', '_______21': 'TextEdit', '_______22': 'TextEdit', '_______23': 'TextEdit', '_______24': 'TextEdit', '_______25': 'TextEdit', '_______26': 'TextEdit', '_______27': 'TextEdit', '_______28': 'TextEdit', '_______29': 'TextEdit', '_______30': 'TextEdit', '_______31': 'TextEdit', '_______32': 'TextEdit', '_______33': 'TextEdit', '_______34': 'TextEdit', '_______35': 'TextEdit', '_______36': 'TextEdit', '_______37': 'TextEdit', '_______38': 'TextEdit', '_______39': 'TextEdit', '_______40': 'TextEdit', '_______41': 'TextEdit', '_______42': 'TextEdit', '_______43': 'TextEdit', '_______44': 'TextEdit', '_______45': 'TextEdit', '_______46': 'TextEdit', '_______47': 'TextEdit', '_______48': 'TextEdit', '_______49': 'TextEdit', '_______50': 'TextEdit', '_______51': 'TextEdit', '_______52': 'TextEdit', '_______53': 'TextEdit', '_______54': 'TextEdit', '_______55': 'TextEdit', '_______56': 'TextEdit', '_______57': 'TextEdit', '_______58': 'TextEdit', '_______59': 'TextEdit', '_______60': 'TextEdit', '_______61': 'TextEdit', '_______62': 'TextEdit', '_______63': 'TextEdit', '_______64': 'TextEdit', '_______65': 'TextEdit', '_______66': 'TextEdit', '_______67': 'TextEdit', '_______68': 'TextEdit', '_______69': 'TextEdit', '_______70': 'TextEdit', '_______71': 'TextEdit', '_______72': 'TextEdit', '_______73': 'TextEdit', '_______74': 'TextEdit', '_______75': 'TextEdit', '_______76': 'TextEdit', '_______77': 'TextEdit', '_______78': 'TextEdit', '_______79': 'TextEdit', '_______80': 'TextEdit', '_______81': 'TextEdit', '_______82': 'TextEdit', '_______83': 'TextEdit', '_______84': 'TextEdit', '_______85': 'TextEdit', '_______86': 'TextEdit', '_______87': 'TextEdit', '_______88': 'TextEdit', '_______89': 'TextEdit', '_______90': 'TextEdit', '_______91': 'TextEdit', '_______92': 'TextEdit', '_______93': 'TextEdit', '_______94': 'TextEdit', '_______95': 'TextEdit', '_______96': 'TextEdit', '_______97': 'TextEdit', '_______98': 'TextEdit', '_______99': 'TextEdit', '_______100': 'TextEdit', '_______101': 'TextEdit', '_______102': 'TextEdit', '_______103': 'TextEdit', '_______104': 'TextEdit', '_______105': 'TextEdit', '_______106': 'TextEdit', '_______107': 'TextEdit', '_______108': 'TextEdit', '_______109': 'TextEdit', '_______110': 'TextEdit', '_______111': 'TextEdit', '_______112': 'TextEdit', '_______113': 'TextEdit', '_______114': 'TextEdit', '_______115': 'TextEdit', '_______116': 'TextEdit', '_______117': 'TextEdit', '_______118': 'TextEdit', '_______119': 'TextEdit', '_______120': 'TextEdit', '_______121': 'TextEdit', '_______122': 'TextEdit', '_______123': 'TextEdit', '_______124': 'TextEdit', '_______125': 'TextEdit', '_______126': 'TextEdit', '_______127': 'TextEdit', '_______128': 'TextEdit', '_______129': 'TextEdit', '_______130': 'TextEdit', '_______131': 'TextEdit', '_______132': 'TextEdit', '_______133': 'TextEdit', '_______134': 'TextEdit', '_______135': 'TextEdit', '_______136': 'TextEdit', '_______137': 'TextEdit', '_______138': 'TextEdit', '_______139': 'TextEdit', '_______140': 'TextEdit', '_______141': 'TextEdit', '_______142': 'TextEdit', '_______143': 'TextEdit', '_______144': 'TextEdit', '_______145': 'TextEdit', '_______146': 'TextEdit', '_______147': 'TextEdit', '_______148': 'TextEdit', '_______149': 'TextEdit', '_______150': 'TextEdit', '_______151': 'TextEdit', '_______152': 'TextEdit', '_______153': 'TextEdit', '_______154': 'TextEdit', '_______155': 'TextEdit', '_______156': 'TextEdit', '_______157': 'TextEdit', '_______158': 'TextEdit', '_______159': 'TextEdit', '_______160': 'TextEdit', '_______161': 'TextEdit', '_______162': 'TextEdit', '_______163': 'TextEdit', '_______164': 'TextEdit', '_______165': 'TextEdit', '_______166': 'TextEdit', '_______167': 'TextEdit', '_______168': 'TextEdit', '_______169': 'TextEdit', '_______170': 'TextEdit', '_______171': 'TextEdit', '_______172': 'TextEdit', '_______173': 'TextEdit', '_______174': 'TextEdit', '_______175': 'TextEdit', '_______176': 'TextEdit', '_______177': 'TextEdit', '_______178': 'TextEdit', '_______179': 'TextEdit', '_______180': 'TextEdit', '_______181': 'TextEdit', '_______182': 'TextEdit', '_______183': 'TextEdit', '_______184': 'TextEdit', '_______185': 'TextEdit', '_______186': 'TextEdit', '_______187': 'TextEdit', });
lyr_feb23308frfeb23256_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'URL': 'no label', 'Title': 'no label', 'Alternative_Title': 'no label', 'Photographer': 'no label', 'Architect': 'no label', 'Date_of_Original': 'no label', 'Geographic_Location': 'no label', 'Subject__Topic': 'no label', 'Type': 'no label', 'Form': 'no label', 'Medium': 'no label', 'Extent': 'no label', 'Collection': 'no label', 'Source': 'no label', 'Repository': 'no label', 'Rights': 'no label', 'Contact_Information': 'no label', 'Identifier': 'no label', 'Address': 'no label', 'Photo': 'no label', '______': 'no label', '_______2': 'no label', '_______3': 'no label', '_______4': 'no label', '_______5': 'no label', '_______6': 'no label', '_______7': 'no label', '_______8': 'no label', '_______9': 'no label', '_______10': 'no label', '_______11': 'no label', '_______12': 'no label', '_______13': 'no label', '_______14': 'no label', '_______15': 'no label', '_______16': 'no label', '_______17': 'no label', '_______18': 'no label', '_______19': 'no label', '_______20': 'no label', '_______21': 'no label', '_______22': 'no label', '_______23': 'no label', '_______24': 'no label', '_______25': 'no label', '_______26': 'no label', '_______27': 'no label', '_______28': 'no label', '_______29': 'no label', '_______30': 'no label', '_______31': 'no label', '_______32': 'no label', '_______33': 'no label', '_______34': 'no label', '_______35': 'no label', '_______36': 'no label', '_______37': 'no label', '_______38': 'no label', '_______39': 'no label', '_______40': 'no label', '_______41': 'no label', '_______42': 'no label', '_______43': 'no label', '_______44': 'no label', '_______45': 'no label', '_______46': 'no label', '_______47': 'no label', '_______48': 'no label', '_______49': 'no label', '_______50': 'no label', '_______51': 'no label', '_______52': 'no label', '_______53': 'no label', '_______54': 'no label', '_______55': 'no label', '_______56': 'no label', '_______57': 'no label', '_______58': 'no label', '_______59': 'no label', '_______60': 'no label', '_______61': 'no label', '_______62': 'no label', '_______63': 'no label', '_______64': 'no label', '_______65': 'no label', '_______66': 'no label', '_______67': 'no label', '_______68': 'no label', '_______69': 'no label', '_______70': 'no label', '_______71': 'no label', '_______72': 'no label', '_______73': 'no label', '_______74': 'no label', '_______75': 'no label', '_______76': 'no label', '_______77': 'no label', '_______78': 'no label', '_______79': 'no label', '_______80': 'no label', '_______81': 'no label', '_______82': 'no label', '_______83': 'no label', '_______84': 'no label', '_______85': 'no label', '_______86': 'no label', '_______87': 'no label', '_______88': 'no label', '_______89': 'no label', '_______90': 'no label', '_______91': 'no label', '_______92': 'no label', '_______93': 'no label', '_______94': 'no label', '_______95': 'no label', '_______96': 'no label', '_______97': 'no label', '_______98': 'no label', '_______99': 'no label', '_______100': 'no label', '_______101': 'no label', '_______102': 'no label', '_______103': 'no label', '_______104': 'no label', '_______105': 'no label', '_______106': 'no label', '_______107': 'no label', '_______108': 'no label', '_______109': 'no label', '_______110': 'no label', '_______111': 'no label', '_______112': 'no label', '_______113': 'no label', '_______114': 'no label', '_______115': 'no label', '_______116': 'no label', '_______117': 'no label', '_______118': 'no label', '_______119': 'no label', '_______120': 'no label', '_______121': 'no label', '_______122': 'no label', '_______123': 'no label', '_______124': 'no label', '_______125': 'no label', '_______126': 'no label', '_______127': 'no label', '_______128': 'no label', '_______129': 'no label', '_______130': 'no label', '_______131': 'no label', '_______132': 'no label', '_______133': 'no label', '_______134': 'no label', '_______135': 'no label', '_______136': 'no label', '_______137': 'no label', '_______138': 'no label', '_______139': 'no label', '_______140': 'no label', '_______141': 'no label', '_______142': 'no label', '_______143': 'no label', '_______144': 'no label', '_______145': 'no label', '_______146': 'no label', '_______147': 'no label', '_______148': 'no label', '_______149': 'no label', '_______150': 'no label', '_______151': 'no label', '_______152': 'no label', '_______153': 'no label', '_______154': 'no label', '_______155': 'no label', '_______156': 'no label', '_______157': 'no label', '_______158': 'no label', '_______159': 'no label', '_______160': 'no label', '_______161': 'no label', '_______162': 'no label', '_______163': 'no label', '_______164': 'no label', '_______165': 'no label', '_______166': 'no label', '_______167': 'no label', '_______168': 'no label', '_______169': 'no label', '_______170': 'no label', '_______171': 'no label', '_______172': 'no label', '_______173': 'no label', '_______174': 'no label', '_______175': 'no label', '_______176': 'no label', '_______177': 'no label', '_______178': 'no label', '_______179': 'no label', '_______180': 'no label', '_______181': 'no label', '_______182': 'no label', '_______183': 'no label', '_______184': 'no label', '_______185': 'no label', '_______186': 'no label', '_______187': 'no label', });
lyr_feb23308frfeb23256_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});