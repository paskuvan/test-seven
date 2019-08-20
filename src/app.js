// $(document).ready(function(){
//     get_ciudades();
//     region = '13';
// })
function get_ciudades(){
    region = $('[name="region_id"] option:selected').val();
    $('[name="type"]').prop('selectedIndex',0);
    //ciudades
    $.get("src/data/sucursales_ciudades.json" , function(data){
        $('[name="city_id"]').empty();
        $('[name="city_id"]').append('<option value="" >--</option>');
        $.each(data , function(i,v){
            if(region == v.region){
                $.each(v.ciudades , function(_i,ciudad){
                    $('[name="city_id"]').append('<option value="'+ciudad.id+'">'+ciudad.ciudad+'</option>');
                })
            }
        })
    });

    //regiones
    $.get('src/data/sucursales.json' , function(data){
        $('.tbody').empty();
        var sHTML = ''; 
        $.each(data , function(i , suc){
            if(region == suc.region){
                sHTML +=    '    <ul class="tbody-table">';
                sHTML +=    '    <li>';
                sHTML +=    '        <span class="only-mobile">Sucursal</span> ' + suc.sucursal;
                sHTML +=    '    </li>';
                sHTML +=    '    <li>';
                sHTML +=    '        <span class="only-mobile">Dirección</span> ' + suc.direccion;
                sHTML +=    '    </li>';
                sHTML +=    '    <li>';
                sHTML +=    '        <span class="only-mobile">Reservar</span><a href="+suc.reserva +">Link</a>';
                sHTML +=    '    </li>';
                if(suc.id == 83){
                        sHTML +=    '<p class="alerta"></p>';
                }
                sHTML +=    '</ul>';
            }
        });
        //console.log(sHTML);
        $('.tbody').append(sHTML);

    })
}

function get_comunas(){
    region = $('[name="region_id"] option:selected').val();
    ciudad = $('[name="city_id"] option:selected').val();
    $('[name="type"]').prop('selectedIndex',0);
    
    //ciudades
    $.get("src/data/sucursales_comunas.json" , function(data){
        $('[name="commune_id"]').empty();
        $('[name="commune_id"]').append('<option value="" >--</option>');
        console.log(data);
        $.each(data , function(i,v){
            if(ciudad == v.ciudad){
                $.each(v.comunas , function(_i,comuna){
                    $('[name="commune_id"]').append('<option value="'+comuna.id+'">'+comuna.comuna+'</option>');
                })
            }
        })
    });

    //sucursales
    $.get('src/data/sucursales.json' , function(data){
        //console.log(data);
        $('.tbody').empty();
        var sHTML = ''; 
        $.each(data , function(i , suc){
            if(region == suc.region && ciudad == suc.ciudad){
                sHTML +=    '    <ul class="tbody-table">';
                sHTML +=    '    <li>';
                sHTML +=    '        <span class="only-mobile">Sucursal</span> ' + suc.sucursal;
                sHTML +=    '    </li>';
                sHTML +=    '    <li>';
                sHTML +=    '        <span class="only-mobile">Dirección</span> ' + suc.direccion;
                sHTML +=    '    </li>';
                sHTML +=    '    <li>';
                sHTML +=    '        <span class="only-mobile">Reservar</span><a "+suc.reserva +">Link</a>';
                sHTML +=    '    </li>';
                if(suc.id == 83){
                        sHTML +=    '<p class="alerta"></p>';
                }
                sHTML +=    '</ul>';
            }
        });
        $('.tbody').append(sHTML);

    })
}

function get_locals(){
    region = $('[name="region_id"] option:selected').val();
    ciudad = $('[name="city_id"] option:selected').val();
    comuna = $('[name="commune_id"] option:selected').val();
    $('[name="type"]').prop('selectedIndex',0);
    
    //obtengo sucursales comuna
    $.get('src/data/sucursales.json' , function(data){
        //console.log(data);
        $('.tbody').empty();
        var sHTML = ''; 
        $.each(data , function(i , suc){
            if(region == suc.region && ciudad == suc.ciudad && comuna == suc.comuna){
                sHTML +=    '    <ul class="tbody-table">';
                sHTML +=    '    <li>';
                sHTML +=    '        <span class="only-mobile">Sucursal</span> ' + suc.sucursal;
                sHTML +=    '    </li>';
                sHTML +=    '    <li>';
                sHTML +=    '        <span class="only-mobile">Dirección</span> ' + suc.direccion;
                sHTML +=    '    </li>';
                sHTML +=    '    <li>';
                sHTML +=    '        <span class="only-mobile">Reservar</span><a "+suc.reserva +">Link</a>';
                sHTML +=    '    </li>';
                if(suc.id == 83){
                        sHTML +=    '<p class="alerta"></p>';
                }
                sHTML +=    '</ul>';
            }
        });
        $('.tbody').append(sHTML);

    })
}

function get_type(){
    region = $('[name="region_id"] option:selected').val();
    ciudad = $('[name="city_id"] option:selected').val();
    comuna = $('[name="commune_id"] option:selected').val();
    tipo   = $('[name="type"] option:selected').val();
    
    //obtengo sucursales comuna
    $.get('src/data/sucursales.json' , function(data){
        //console.log(data);
        $('.tbody').empty();
        var sHTML = ''; 
        $.each(data , function(i , suc){
            if((region == suc.region && ciudad == suc.ciudad && comuna == suc.comuna) && ((tipo == 'accesorios' && suc.accesorios == 'SI') || tipo == 'atencion' && suc.atencion == 'SI' || tipo == 'reserva' && suc.reserva == 'SI' || tipo == 'servicio' && suc.servicio == 'SI' || tipo == 'todas' || tipo == '')){

                sHTML +=    '    <ul class="tbody-table">';
                sHTML +=    '    <li>';
                sHTML +=    '        <span class="only-mobile">Sucursal</span> ' + suc.sucursal;
                sHTML +=    '    </li>';
                sHTML +=    '    <li>';
                sHTML +=    '        <span class="only-mobile">Dirección</span> ' + suc.direccion;
                sHTML +=    '    </li>';
                sHTML +=    '    <li>';
                sHTML +=    '       <span class="only-mobile">Reservar</span><a "+suc.reserva +">Link</a>';
                sHTML +=    '    </li>';
                if(suc.id == 83){
                        sHTML +=    '<p class="alerta"></p>';
                }
                sHTML +=    '</ul>';

            }
        });
        $('.tbody').append(sHTML);

    })
}






var app = function(){
    var regionsSelect, citiesSelect, communesSelect, attentionTypesSelect, detailsTable, currentAddress;

    var fillFakeSelect = function(element, label, data){
        var sHTML = '<li><a class="dropy__header">' + label + '</a></li>';

        $.each(data, function(index, value){
            sHTML += '<li><a data-value="' + value.id +'">' + value.value + '</a></li>';
        });

        element.html(sHTML);
    };

    var resetFakeSelect = function(element, title){
        element.parents('.dropy').find('.dropy__title span').removeClass('selected').html(title);
        element.empty();
    };

    var resetTable = function(element){
        var sHTML = ''; 

        sHTML += '<ul class="header-table">';
        sHTML += '  <li>Sucursal</li>';
        sHTML += '  <li>Dirección</li>';
        sHTML += '  <li>Reserva</li>';
        sHTML += '</ul>';

        element.html(sHTML);
    }

    var fillTable = function(element, data){
        var sHTML = ''; 

        sHTML += '<ul class="header-table">';
        sHTML += '  <li>Sucursal</li>';
        sHTML += '  <li>Dirección</li>';
        sHTML += '  <li>reserva</li>';
        sHTML += '</ul>';

        $.each(data, function(index, value){
            sHTML +=    '<ul class="tbody-table">';
            sHTML +=    '    <li>';
            sHTML +=    '        <span class="only-mobile">Sucursal</span> ' + value.sucursal;
            sHTML +=    '    </li>';
            sHTML +=    '    <li>';
            sHTML +=    '        <span class="only-mobile">Dirección</span> ' + value.direccion;
            sHTML +=    '    </li>';
            sHTML +=    '    <li>';
            sHTML +=    '        <span class="only-mobile">Reservar</span><a "+value.reserva +">Link</a>';
            sHTML +=    '    </li>';
			if(value.id == 83){
			     sHTML +=    '<p class="alerta"></p>';
			}
            
			
            sHTML +=    '</ul>';
        });

        element.html(sHTML);
    };


    var resetCity = function () {
        $('input[name="city_id"]').val('');
        $('input[name="commune_id"]').val('');
        $('input[name="attention_type_id"]').val('');
    };

    var resetCommune = function () {
        $('input[name="commune_id"]').val('');
        $('input[name="attention_type_id"]').val('');
    };

    var resetAttentionType = function () {
        $('input[name="attention_type_id"]').val('');
    };

    var changeNestedSelect = function(element, value){
        if(element.hasClass('region')){
            loadCities(value);
            resetCity();
        }else if(element.hasClass('city')){
            loadCommunes(value);
            resetCommune();
        }else if(element.hasClass('commune')){
            loadAttentionTypes(value);
            resetAttentionType();
        }else if(element.hasClass('attention-type')){
            //loadData();
        }else{
            //Do nothing
        }

        loadData();
    };

    var setCurrentAddress = function () {
        var addressArray = [];

        var address = {
            'country': countryName,
            'region' : regionsSelect.parents('dl.dropy').find('dt.dropy__title > span').html(),
            'city'   : citiesSelect.parents('dl.dropy').find('dt.dropy__title > span').html(),
            'commune': communesSelect.parents('dl.dropy').find('dt.dropy__title > span').html()
        };

        if(address.commune != labels.commune){
            addressArray.push(address.commune);
        }

        if(address.city != labels.city && address.city != address.commune){
            addressArray.push(address.city);
        }

        if(address.region != labels.region){
            addressArray.push('Region ' + address.region);
        }

        addressArray.push(address.country);

        currentAddress = addressArray.join(', ');
    };

    var setFirstAddress = function (item) {
        var addressArray = [];

        var address = {
            'country': countryName,
            'region' : regionsSelect.parents('dl.dropy').find('dt.dropy__title > span').html(),
            'city'   : citiesSelect.parents('dl.dropy').find('dt.dropy__title > span').html(),
            'commune': communesSelect.parents('dl.dropy').find('dt.dropy__title > span').html(),
            'address': item.direccion
        };

        if(address.address != ''){
            addressArray.push(address.address);
        }

        if(address.commune != labels.commune){
            addressArray.push(address.commune);
        }

        if(address.city != labels.city && address.city != address.commune){
            addressArray.push(address.city);
        }

        if(address.region != labels.region){
            addressArray.push('Region ' + address.region);
        }

        addressArray.push(address.country);

        currentAddress = addressArray.join(', ');
    };

    var initializeVariables = function() {
        regionsSelect = $('dl.dropy.region dd.dropy__content > ul');
        citiesSelect = $('dl.dropy.city dd.dropy__content > ul');
        communesSelect = $('dl.dropy.commune dd.dropy__content > ul');
        attentionTypesSelect = $('dl.dropy.attention-type dd.dropy__content > ul');
        detailsTable = $('div#tab-2 div.contant-table');

        labels = $.parseJSON(labels);

        maps.init();
    };
}();