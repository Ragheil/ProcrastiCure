import React, { useState } from 'react';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import HomeButton from '../assets/Buttons/homeButton.png';  
import Time from '../assets/Buttons/time.png';  
import Flash from '../assets/Buttons/flash.png';  

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(getFormatedDate(new Date(), 'YYYY-MM-DD')); // default current date

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
 
  const handleTimeClick = () => {
    console.log('Time is clicked');
  };

  const handleFlashClick = () => {
    console.log('Flash is clicked');
  };

  return (
    <View style={styles.container}>
     
      <DatePicker
        options={{
          backgroundColor: '#090C08',
          textHeaderColor: '#FFFFFFFF',
          textDefaultColor: '#F6E7C1',
          selectedTextColor: '#fff',
          mainColor: '#F4722B',
          textSecondaryColor: '#D6C7A1',
          borderColor: '#FFFFFFFF',
        }}
        current={selectedDate}
        selected={selectedDate}
        mode="calendar"
        minuteInterval={30}
        onDateChange={handleDateChange}
        style={{ borderRadius: 10 }}
      />

      {/* Below the Calendar - Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => console.log('Home button is clicked')}>
          <Image source={HomeButton} style={styles.button} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleTimeClick}>
          <Image source={Time} style={styles.button} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFlashClick}>
          <Image source={Flash} style={styles.button} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',      
    backgroundColor: '#1f1f1f',
    padding: 20,

  },
  buttonsContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    width: '100%', 
    paddingHorizontal: 20, 
    marginTop: 20,  
    marginTop: 90,

  },
  button: {
    width: 65,  
    height: 65, 
    marginHorizontal: 20, 
    borderRadius: 40, 
    backgroundColor: '#FFFFFF', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 10,
  },
});

export default Calendar;
