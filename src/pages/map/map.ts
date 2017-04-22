import { Component, OnInit } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Locations } from '../../providers/locations';
import { GoogleMaps } from '../../providers/google-maps';
import { NavController, Platform } from 'ionic-angular';
import { ListPage } from '../list/list';
import { DetailPage } from '../detail/detail';
import * as L from 'leaflet';

@Component({
    selector: 'page-map',
    templateUrl: 'map.html'
})

export class MapPage implements OnInit{
tab1Root:any=ListPage;
tab2Root:any=MapPage;


    constructor(public navCtrl: NavController, public maps: GoogleMaps, public platform: Platform, public locations: Locations,public http: Http) {

       

    }
    //http://stackoverflow.com/questions/37841721/angular2-wait-for-multiple-promises-to-finish

    ngOnInit(): void {
    
        this.drawMap();
        this.platform.ready().then(() => {

            let locationsLoaded = this.locations.load();
            Promise.all([

                locationsLoaded
            ])
        });
    }

    drawMap(): void {
        let map = L.map('map');


        L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzsdDXD2lMJpTfCVsVuA', {
            attribution: 'Map data &copy; <a href="http://GuideMe.Com">GuideMe</a>Author:<a href="http://json.Alfelah.com/">Taieb</a>',
            maxZoom: 18
        }).addTo(map);



        //Location emta3i As soon as yetchrja !
        map.locate({ setView: true},12);


//https://www.coordonnees-gps.fr/communes/paris-/75100 emta3 el finder des geoloc
        //Quand j'ai la localisation dessine les Markers ! 
        function onLocationFound(e) {
            var radius = e.accuracy / 2;
            L.marker(e.latlng, {draggable:'true'}).addTo(map);
            L.circle(e.latlng, radius).addTo(map)

            //Remedier à ça le plus tot possible ...



 // this.http.get('app/src/assets/data/locations.json')
 //                .then((locations) => {
    
 //    locations.forEach((locations) => {
 //        L.marker([locations.lat, locations.long])
 //         .bindPopup(locations.title )
         
 //      });
 //    });


//     this.http.get("data/locations.json")
// .map((res) => res.json())
// .subscribe((result) => {
// for(let i = 0; i < result.locations.length; i++) {
// let point = result.locations[i];
// L.marker([point.lat, point.long])
// .bindPopup("<b>" + point.title + "<b><img style='width: 100%' src='http://i.imgur.com/XMVjS1s.jpg'/>")
// .addTo(map);    
// }
// });



            L.marker(
                [48.838806, 2.282278]).addTo(map).bindPopup("<b>Musée de l'Homme (Muséum National d'Histoire Naturelle)</b><div><img style='width: 100%' src='http://www.museedelhomme.fr/sites/museedelhomme.fr/files/styles/bandeau_home/public/thumbnails/image/musee-de-lhomme_jfk003_1440_850_0.jpg'alt='image'/></div> ",{minWitdh:256});



            L.marker(
                [48.863788,2.322672]).addTo(map).bindPopup("<b>Musée National de L'Orangerie des Tuileries</b><div><img style='width: 100%' src='http://i.imgur.com/ga9pBRR.jpg' alt='image'/></div> ",{minWitdh:256} );

            L.marker(
                [48.859754,2.325917]).addTo(map).bindPopup("<b>Etablissement Public du Musée d'Orsay</b><div><img style='width: 100%' src='http://i.imgur.com/KNh0jrE.jpg'/></div> ",{minWitdh:256} );
            L.marker(
                [48.871887,2.282381]).addTo(map).bindPopup("<b>Musée d'Ennery</b><div><img style='width: 100%' src='http://i.imgur.com/4f7zTVg.png'/></div> ",{minWitdh:256} );
            L.marker(
                [48.840346,2.319415]).addTo(map).bindPopup("<b>Musée Jean Moulin</b><div><img style='width: 100%' src='http://i.imgur.com/KNh0jrE.jpg'/></div> ",{minWitdh:256} );
                
             L.marker(
                [48.8597,2.362644]).addTo(map).bindPopup("<b>Musée National Picasso</b><div><img style='width: 100%' src='http://i.imgur.com/l99VhGo.jpg'/></div> ",{minWitdh:256} );

            L.marker(
                [48.858257,2.361524]).addTo(map).bindPopup("<b>Musée Cognacq-Jay, Musée du XVIIIe siècle de la ville de Paris</b><div><img style='width: 100%' src='http://i.imgur.com/yDJNx1o.png'/></div> ",{minWitdh:256} );
                   
                     L.marker(
                [48.840346,2.319415]).addTo(map).bindPopup("<b>Musée Jean Moulin</b><div><img style='width: 100%' src='http://i.imgur.com/KNh0jrE.jpg'/></div> ",{minWitdh:256} );

                     L.marker(
                [48.841491,2.355989]).addTo(map).bindPopup("<b>Galerie de Minéralogie et de Géologie (Muséum d'Histoire Naturelle)</b><div><img style='width: 100%' src='http://i.imgur.com/7ILKKdG.png'/></div> ",{minWitdh:256} );
                   
                     L.marker(
                [48.878849,2.312855]).addTo(map).bindPopup("<b>Musée Nissim de Camondo (Les Arts Décoratifs)</b><div><img style='width: 100%' src='http://i.imgur.com/FGTEuoh.png    '/></div> ",{minWitdh:256} );
    
                     L.marker(
                [48.887709,2.340577]).addTo(map).bindPopup("<b>Musée de Montmartre</b><div><img style='width: 100%' src='http://i.imgur.com/XMVjS1s.jpg'/></div> ",{minWitdh:256} );   


                     L.marker(
                [48.877878,2.334383]).addTo(map).bindPopup("<b>Musée d'Art Moderne de la ville de Paris</b><div><img style='width: 100%' src='http://i.imgur.com/VYRCUYf.png'/></div> ",{minWitdh:256} );

                     L.marker(
                [48.86434209999999,2.297820799999954]).addTo(map).bindPopup("<b>Musée National Gustave Moreau</b><div><img style='width: 100%' src='http://i.imgur.com/GLB9Qw9.jpg'/></div> ",{minWitdh:256} );



                    L.marker(
                [48.86434209999999,2.297820799999954]).addTo(map).bindPopup("<b>Musée National Gustave Moreau</b><div><img style='width: 100%' src='http://i.imgur.com/GLB9Qw9.jpg'/></div> ",{minWitdh:256} );


                    L.marker(
                [48.880899,2.333278]).addTo(map).bindPopup("<b>Musée de la Vie Romantique</b><div><img style='width: 100%' src='http://i.imgur.com/yTY7KCO.jpg'/></div> ",{minWitdh:256} );


                    L.marker(
                [48.8633218,2.3333]).addTo(map).bindPopup("<b>Musées Arts Décoratifs Mode et du Textile</b><div><img style='width: 100%' src='http://i.imgur.com/eyXAdEW.jpg'/></div> ",{minWitdh:256} );


                    L.marker(
                [48.860433,2.324889]).addTo(map).bindPopup("<b>Musée National de la Légion d'Honneur et des Ordres de Chevalerie</b><div><img style='width: 100%' src='http://i.imgur.com/QI1AanH.jpg'/></div> ",{minWitdh:256} );


                    L.marker(
                [48.854437,2.335771]).addTo(map).bindPopup("<b>Musée National Eugène Delacroix</b><div><img style='width: 100%' src='http://i.imgur.com/BSDbk5j.png'/></div> ",{minWitdh:256} );

                      L.marker(
                [48.865008,2.293674]).addTo(map).bindPopup("<b>Etablissement Public du Musée des Arts Asiatiques Guimet</b><div><img style='width: 100%' src='http://i.imgur.com/FKVmJTl.jpg'/></div> ",{minWitdh:256} );

 L.marker(
                [48.877026,2.267791]).addTo(map).bindPopup("<b>M.U.C.E.M. - Musée des ATP</b><div><img style='width: 100%' src='http://i.imgur.com/Tv0Ba3g.jpg'/></div> ",{minWitdh:256} );

 L.marker(
                [48.841491,2.355989]).addTo(map).bindPopup("<b>Musée Bouchard</b><div><img style='width: 100%' src='http://i.imgur.com/QboGdIv.jpg'/></div> ",{minWitdh:256} );

 //--//
 L.marker(
                [48.8447245,2.3591507]).addTo(map).bindPopup("<b>Galerie de Botanique (Muséum National National d'Histoire Naturelle)</b><div><img style='width: 100%' src='http://i.imgur.com/6fCyEsW.jpg'/></div> ",{minWitdh:256} );

L.marker(
                [48.86095,2.347221]).addTo(map).bindPopup("<b>Musée d'Art et d'Histoire du Judaïsme</b><div><img style='width: 100%' src='http://i.imgur.com/oda0hFb.jpg'/></div> ",{minWitdh:256} );

L.marker(
                [48.835301,2.4094089999999824]).addTo(map).bindPopup("<b>Établissement Public de la Porte Dorée - Musée de l'Histoire de l'Immigration</b><div><img style='width: 100%' src='http://i.imgur.com/QboGdIv.jpg'/></div> ",{minWitdh:256} );

L.marker(
                [48.861337,2.4094089000000167]).addTo(map).bindPopup("<b>Musée de la Chasse et de la Nature</b><div><img style='width: 100%' src='http://i.imgur.com/ouIm6It.jpg'/></div> ",{minWitdh:256} );

L.marker(
                [48.85538,2.3333]).addTo(map).bindPopup("<b>Maison de Balzac</b><div><img style='width: 100%' src='http://i.imgur.com/QboGdIv.jpg'/></div> ",{minWitdh:256} );

L.marker(
                [48.829117,2.37785]).addTo(map).bindPopup("<b>Musée National du Sport</b><div><img style='width: 100%' src='http://i.imgur.com/GuF3LAf.jpg'/></div> ",{minWitdh:256} );

L.marker(
                [48.847429,2.322709]).addTo(map).bindPopup("<b>Musée Hébert</b><div><img style='width: 100%' src='http://i.imgur.com/HaTyFIi.jpg'/></div> ",{minWitdh:256} );

L.marker(
                [48.8353012,2.4094089000000167]).addTo(map).bindPopup("<b>Etablissement public de la Porte Dorée - Aquarium Tropical</b><div><img style='width: 100%' src='http://i.imgur.com/E527u0s.jpg'/></div> ",{minWitdh:256} );

L.marker(
                [48.85538,2.280755]).addTo(map).bindPopup("<b>Maison de Balzac</b><div><img style='width: 100%' src='http://i.imgur.com/iGesowk.jpg/></div> ",{minWitdh:256} );

L.marker(
                [48.858257,2.361524]).addTo(map).bindPopup("<b>Musée Cognacq-Jay, Musée du XVIIIe siècle de la ville de Paris</b><div><img style='width: 100%' src='http://i.imgur.com/mGTnFFC.jpg'/></div> ",{minWitdh:256} );

L.marker(
                [48.841491,2.355989]).addTo(map).bindPopup("<b>Galerie de Minéralogie et de Géologie (Muséum d'Histoire Naturelle)</b><div><img style='width: 100%' src='http://i.imgur.com/WU9iYdj.jpg'/></div> ",{minWitdh:256} );


L.marker(
                [48.853542,2.347221]).addTo(map).bindPopup("<b>Crypte Archéologique du Parvis Notre-Dame</b><div><img style='width: 100%' src='http://i.imgur.com/QboGdIv.jpg'/></div> ",{minWitdh:256} );



L.marker(
                [48.863218,2.3333]).addTo(map).bindPopup("<b>Musées Arts Décoratifs Mode et du Textile</b><div><img style='width: 100%' src='http://i.imgur.com/QboGdIv.jpg'/></div> ",{minWitdh:256} );



L.marker(
                [48.841491,2.355989]).addTo(map).bindPopup("<b>Musée Bouchard</b><div><img style='width: 100%' src='http://www.germanopratines.fr/wp-content/uploads/2011/04/musee_bourdelle-3.jpg'/></div> ",{minWitdh:256} );



L.marker(
                [48.833784,2.331927]).addTo(map).bindPopup("<b>Les Catacombes</b><div><img style='width: 100%' src='http://www.typogabor.com/Media/christian_lacroix/christian_lacroix_3.jpg'/></div> ",{minWitdh:256} );



L.marker(
                [48.866088,2.313814]).addTo(map).bindPopup("<b>Petit Palais, Musée des Beaux-Arts de la ville de Paris</b><div><img style='width: 100%' src='http://cityguide.paris-is-beautiful.com/wp-content/uploads/2013/04/874_PETITPALAIS_K.jpg/></div> ",{minWitdh:256} );



L.marker(
                [48.85538,2.333278]).addTo(map).bindPopup("<b>Musée de la Vie Romantique</b><div><img style='width: 100%' src='https://media-cdn.tripadvisor.com/media/photo-s/02/15/44/f3/musee-de-la-vie-romantique.jpg'/></div> ",{minWitdh:256} );



L.marker(
                [48.855868,2.31598]).addTo(map).bindPopup("<b>Musée National Auguste Rodin</b><div><img style='width: 100%' src='http://i.imgur.com/QboGdIv.jpg'/></div> ",{minWitdh:256} );



L.marker(
                [48.871887,2.282381]).addTo(map).bindPopup("<b>Musée d'Ennery</b><div><img style='width: 100%' src='http://www.delanopolis.fr/photo/art/default/5994632-8936797.jpg'/></div> ",{minWitdh:256} );



L.marker(
                [48.863218,2.3333]).addTo(map).bindPopup("<b>Musées des Arts Décoratifs</b><div><img style='width: 100%' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Musee_des_arts_decoratifs.jpg/280px-Musee_des_arts_decoratifs.jpg'/></div> ",{minWitdh:256} );



L.marker(
                [48.843835,2.355201]).addTo(map).bindPopup("<b>Galerie d’entomologie (Muséum national d'histoire naturelle)</b><div><img style='width: 100%' src='http://i.imgur.com/NuOJTDN.jpg'/></div> ",{minWitdh:256} );



L.marker(
                [48.889306,2.393807]).addTo(map).bindPopup("<b>Musée de la Musique</b><div><img style='width: 100%' src='https://media-cdn.tripadvisor.com/media/photo-s/02/40/9c/d2/musee-de-la-musique.jpg'/></div> ",{minWitdh:256} );
L.marker(
                [48.874952,2.343057]).addTo(map).bindPopup("<b>Musée de la Franc-Maçonnerie</b><div><img style='width: 100%' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Musee-de-la-musique-3.jpg/280px-Musee-de-la-musique-3.jpg'/></div> ",{minWitdh:256} );

L.marker(
                [48.879693,2.312194]).addTo(map).bindPopup("<b>Musée Cernuschi, Musée des Arts de l'Asie de la ville de Paris</b><div><img style='width: 100%' src='http://www.cernuschi.paris.fr/sites/cernuschi/files/editeur/Musee/escalier_dhonneur_du_musee_cernuschi.jpg'/></div> ",{minWitdh:256} );

L.marker(
                [48.858905,2.340991]).addTo(map).bindPopup("<b>Musée du Louvre</b><div><img style='width: 100%' src='http://aflouvre.org/assets/slideshows/38/home_temp1__medium.jpg'/></div> ",{minWitdh:256} );
L.marker(
                [48.843017,2.31883]).addTo(map).bindPopup("<b>Musée Bourdell</b><div><img style='width: 100%' src='http://www.germanopratines.fr/wp-content/uploads/2011/04/musee-bourdelle.jpg'/></div> ",{minWitdh:256} );

L.marker(
                [48.862923,2.287896]).addTo(map).bindPopup("<b>Musée des Monuments Français</b><div><img style='width: 100%' src='http://i.imgur.com/QboGdIv.jpg'/></div> ",{minWitdh:256} );

L.marker(
                [48.8547972,2.366162000000031]).addTo(map).bindPopup("<b>Maison de Victor Hugo</b><div><img style='width: 100%' src='http://www.linternaute.com/musee/image_musee/540/54664_1225355172/maison-de-victor-hugo.jpg'/></div> ",{minWitdh:256} );

L.marker(
                [48.858219,2.312885]).addTo(map).bindPopup("<b>Mémorial du Maréchal Leclerc de Hauteclocque et de la Libération de Paris - Musée Jean Moulin</b><div><img style='width: 100%' src='http://blog.ac-versailles.fr/memoireetcitoyenneteenpartage/public/._DSC0073_m.jpg'/></div> ",{minWitdh:256} );

L.marker(
                [48.826334,2.330549]).addTo(map).bindPopup("<b>Musée Lénine</b><div><img style='width: 100%' src='http://culturebox.francetvinfo.fr/sites/default/files/assets/images/2014/05/068_aa_270320142b15.jpg'/></div> ",{minWitdh:256} );

L.marker(
                [48.856822,2.350350]).addTo(map).bindPopup("<b>Musée de l'Assistance Publique - Hôpitaux de Paris</b><div><img style='width: 100%' src='http://www.aphp.fr/sites/default/files/tubage.jpg'/></div> ",{minWitdh:256} );
L.marker(
                [48.883045,2.307689]).addTo(map).bindPopup("<b>Musée Jean-Jacques Henner</b><div><img style='width: 100%' src='http://www.touslesmusees.fr/app/uploads/Jean-Jacques-henner-dsc_0020-2-recadr%C3%A9-TLM1.jpg'/></div> ",{minWitdh:256} );
L.marker(
                [48.864833,2.29738]).addTo(map).bindPopup("<b>Musée d'Art Moderne de la ville de Paris</b><div><img style='width: 100%' src='http://i.imgur.com/1u9xQIj.jpg/></div> ",{minWitdh:256} );
L.marker(
                [48.85699,2.362856]).addTo(map).bindPopup("<b>Musée Carnavalet-Histoire de Paris</b><div><img style='width: 100%' src='http://www.carnavalet.paris.fr/sites/default/files/editeur/carnavalet_22sur33.jpg'/></div> ",{minWitdh:256} );
L.marker(
                [48.843835,2.355201]).addTo(map).bindPopup("<b>Galerie dentomologie (Muséum national d'histoire naturelle)</b><div><img style='width: 100%' src='https://s-media-cache-ak0.pinimg.com/564x/49/81/2a/49812a7b3a563badc916f8903a0c8f1d.jpg'/></div> ",{minWitdh:256} );







           


//Juste pour tester le cercle d'un Cluster et comprendre son fonctionnement 
            L.marker(e.latlng).addTo(map)

                .bindPopup("Tu es dans ce perimetre de " + radius + " m.").openPopup();

            L.circle(e.latlng, radius).addTo(map);





        }
        map.on('locationfound', onLocationFound);
        //alert on location error
        function onLocationError(e) {
            alert(e.message);
        }

        map.on('locationerror', onLocationError);
    }
    //Marker




}
