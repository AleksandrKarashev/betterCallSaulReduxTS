import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, Dimensions } from 'react-native';

import useHttp from '../hooks/http.hook';

import CustomButton from "../components/CustomButton";
import HeaderText from '../components/HeaderText';
import SampleText from '../components/SampleText';

import inputStyles from '../styles/input.styles';
import containerStyles from '../styles/container.styles';
import Advertisement from "../assets/images/advertisement.jpg";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as scheduleActions from '../actions/schedule';
import { IS_SCHEDULED, RootState } from '../types/types';

const windowWidth = Dimensions.get('window').width;

interface IScreen1 {
   navigation: any,
   actions: any,
   isScheduled: IS_SCHEDULED;
}

const Screen1: React.FC<IScreen1> = ({ navigation, actions, isScheduled }) => {

   const [name, setName] = useState<string>("");
   const [status, setStatus] = useState<string>("");

   const { request, isLoading } = useHttp();

   const scheduleCall = async () => {
      const response = await request(
         "http://10.0.2.2:5000/register",
         "POST",
         { name },
      )
      if (response.isOk) {
         actions.setIsScheduled(true)
         navigation.navigate('Status', { name })
      }
      setStatus(response.message)
   }

   return (
      <>
         <View
            style={containerStyles.container}>

            <HeaderText>
               Tem problemas com a lei? É melhor ligar para o Saul!
            </HeaderText>

            <TextInput
               style={inputStyles.input}
               placeholder="Insira seu nome aqui"
               maxLength={40}
               value={name}
               onChangeText={setName}
               editable={!isScheduled}
            />

            <CustomButton
               disabledCondition={name.length === 0 || isLoading || isScheduled}
               func={scheduleCall}
            >Agendar ligação
            </CustomButton>

            <SampleText>{status}</SampleText>

         </View >

         <Image
            source={Advertisement}
            style={[styles.image]}
         />
      </>
   );
}

const styles = StyleSheet.create({
   image: {
      width: windowWidth,
   }
});

const mapStateToProps = (state: RootState) => ({
   isScheduled: state.isScheduled
});

const ActionCreators = Object.assign(
   {},
   scheduleActions,
);

const mapDispatchToProps = (dispatch: any) => ({
   actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen1)
