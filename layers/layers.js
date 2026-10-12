var wms_layers = [];

var format_GEOMORCLIP_0 = new ol.format.GeoJSON();
var features_GEOMORCLIP_0 = format_GEOMORCLIP_0.readFeatures(json_GEOMORCLIP_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORCLIP_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORCLIP_0.addFeatures(features_GEOMORCLIP_0);
var lyr_GEOMORCLIP_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORCLIP_0, 
                style: style_GEOMORCLIP_0,
                popuplayertitle: 'GEOMOR CLIP',
                interactive: true,
                title: '<img src="styles/legend/GEOMORCLIP_0.png" /> GEOMOR CLIP'
            });
var format_GEOLOGYCLIPPED_1 = new ol.format.GeoJSON();
var features_GEOLOGYCLIPPED_1 = format_GEOLOGYCLIPPED_1.readFeatures(json_GEOLOGYCLIPPED_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGYCLIPPED_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGYCLIPPED_1.addFeatures(features_GEOLOGYCLIPPED_1);
var lyr_GEOLOGYCLIPPED_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGYCLIPPED_1, 
                style: style_GEOLOGYCLIPPED_1,
                popuplayertitle: 'GEOLOGY CLIPPED',
                interactive: false,
                title: '<img src="styles/legend/GEOLOGYCLIPPED_1.png" /> GEOLOGY CLIPPED'
            });
var format_DRAINAGECLIPED_2 = new ol.format.GeoJSON();
var features_DRAINAGECLIPED_2 = format_DRAINAGECLIPED_2.readFeatures(json_DRAINAGECLIPED_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAINAGECLIPED_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINAGECLIPED_2.addFeatures(features_DRAINAGECLIPED_2);
var lyr_DRAINAGECLIPED_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINAGECLIPED_2, 
                style: style_DRAINAGECLIPED_2,
                popuplayertitle: 'DRAINAGE CLIPED',
                interactive: false,
                title: '<img src="styles/legend/DRAINAGECLIPED_2.png" /> DRAINAGE CLIPED'
            });
var format_ktrgeology_3 = new ol.format.GeoJSON();
var features_ktrgeology_3 = format_ktrgeology_3.readFeatures(json_ktrgeology_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ktrgeology_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ktrgeology_3.addFeatures(features_ktrgeology_3);
var lyr_ktrgeology_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ktrgeology_3, 
                style: style_ktrgeology_3,
                popuplayertitle: 'ktr geology',
                interactive: true,
                title: '<img src="styles/legend/ktrgeology_3.png" /> ktr geology'
            });

lyr_GEOMORCLIP_0.setVisible(true);lyr_GEOLOGYCLIPPED_1.setVisible(true);lyr_DRAINAGECLIPED_2.setVisible(true);lyr_ktrgeology_3.setVisible(true);
var layersList = [lyr_GEOMORCLIP_0,lyr_GEOLOGYCLIPPED_1,lyr_DRAINAGECLIPED_2,lyr_ktrgeology_3];
lyr_GEOMORCLIP_0.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_GEOLOGYCLIPPED_1.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_DRAINAGECLIPED_2.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_ktrgeology_3.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_GEOMORCLIP_0.set('fieldImages', {'fid': '', 'NAME': '', 'TYPE1': '', 'TYPE2': '', });
lyr_GEOLOGYCLIPPED_1.set('fieldImages', {'ROCK_GROUP': '', 'NAME': '', });
lyr_DRAINAGECLIPED_2.set('fieldImages', {'ORDER1': '', });
lyr_ktrgeology_3.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_GEOMORCLIP_0.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_GEOLOGYCLIPPED_1.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_DRAINAGECLIPED_2.set('fieldLabels', {'ORDER1': 'no label', });
lyr_ktrgeology_3.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - visible with data', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_ktrgeology_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});