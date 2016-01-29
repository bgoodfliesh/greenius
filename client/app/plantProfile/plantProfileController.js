var plantProfile = angular.module('plantProfile', []);
plantProfile.controller('plantProfileController',['Plants', '$state', function(Plants, $state){
  var that = this;
  that.data = {};
    that.data.nickname = $state.params.nickname;

    that.getPlant = function(){
      Plants.getPlant(that.data)
        .then(function(results){
          that.data.id = results.data.idOfSpecies;
          that.data.plantDate = results.data.plantDate;
          that.data.plantStatus = results.data.plantStatus;
          that.getSpecieInfoOfPlant();
        })
        .catch(function(error){
          console.log(error)
        });
    };
    that.getPlant();

    that.getSpecieInfoOfPlant = function(){
      Plants.getSpecieById(that.data)
        .then(function(results){
          that.data.botanicalName = results.data.botanicalName;
          that.data.careGuide = results.data.careGuide;
          that.data.commonName = results.data.commonName;
          that.data.exposure = results.data.exposure;
          that.data.generalPlantInfo = results.data.generalInformation;
          that.data.plantPic = results.data.plantPic;
          that.data.wateringInformation = results.data.wateringInformation;
          that.data.typeOf = results.data.typeOf;
        })
        .catch(function(error){
          console.log(error);
        });
    };

}]);
