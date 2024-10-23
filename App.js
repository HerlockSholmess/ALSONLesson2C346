import React from 'react';
import { Text, StatusBar, Image, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({title,description, icon_name, photo})=> {
  return (

      <ScrollView>
          <Text>
              <Icon name={icon_name} size={20}/>
          {title}
          </Text>
          <Text>
          {description}
          </Text>

          <Image source={photo}
                 style={{width: 400, height: 500}} />

      </ScrollView>
  );
};

const Ships = () =>{
  return (
      <ScrollView>
        <StatusBar hidden ={true}/>
        <Boat title = 'Sea Ray 500 Sundancer' description = "Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." icon_name="sailboat" photo={require('./img/sea_ray.jpg')}/>

        <Boat title = 'Four Winns Horizon 180' description = "A sporty look and refined details truly set the Horizon 180 above all others."  icon_name="sailboat" photo={require('./img/four_winns.jpg')}/>

          <Boat title = 'Flipper 640 ST' description = "A modern take on the classic, traditional hardtop and perfect for a family picnic."  icon_name="sailboat" photo={require('./img/flipper.jpg')}/>

          <Boat title = 'Princess V48' description = "There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."  icon_name="sailboat" photo={require('./img/princess.jpg')}/>

          <Boat title = 'Bayliner 175 Bowrider' description = "A modern take on the classic, traditional hardtop and perfect for a family picnic.Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."  icon_name="sailboat" photo={require('./img/bayliner.jpg')}/>

          <Boat title = 'Fairline Targa 47' description = "Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."  icon_name="sailboat" photo={require('./img/fairline.jpg')}/>
      </ScrollView>
  );
};


export default Ships;
