'use strict'
var RaumkernelLib = require('node-raumkernel')

class AppRaumclient_ControlCenter extends RaumkernelLib.Base
{
    constructor(_app)
    {
      super()     
      this.app = _app
      this.elementZoneSelector  = null
      this.elementAlbumArtCover = null
    }

    additionalLogIdentifier()
    {
      return "Raumclient"
    }


    init()
    {
        this.initElements()
        // only for test:
        this.updateAlbumArtBackgroundView()
    }

    initElements()
    {
      this.elementZoneSelector  = document.getElementById("controlcenter_zoneselector")     
      this.elementAlbumArtCover = document.getElementById("controlcenter_albumArtCover") 
    }


    combinedZoneDataChanged(_zoneData)
    {
        this.elementZoneSelector.setZoneData(_zoneData)
    }

    updateAlbumArtBackgroundView() 
    {
      app.getMusicArtistInfoFromApi("The Pretty Reckless").then(function(_data){
        _data = _data

        //_data.artist

      })
            
      this.elementAlbumArtCover= "url('http://10.0.0.203:47366/raumfeldImage?albumId=Alb.55376000&album=Light%20Me%20Up&artist=The%20Pretty%20Reckless&service=Napster') no-repeat center center fixed"
      this.elementAlbumArtCover = "cover"      
    }
    

}