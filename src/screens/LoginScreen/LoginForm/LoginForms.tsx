
import React from 'react'
import { observer } from "mobx-react-lite";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { View, TextInput, Text } from "react-native";
import { Button } from "../../../components/Button";
import { ILoginData } from "../../../interfaces";
import { useStores } from "../../../stores";
import { styles } from "./styles";

export const LoginForm: React.FC = observer((): JSX.Element => {

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm<ILoginData>()

  const { auth } = useStores()

  const submitHandler: SubmitHandler<ILoginData> = (data) => {
    auth.login(data)
    reset()
  }

  return (
    <View style={styles.fieldContainer}>
      <Controller
        control={control}
        name='email'
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Enter email'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
      />

      <Controller
        control={control}
        name='password'
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Enter password'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
          />
        )}
      />

      <Button
        primary
        title='Let`s go!'
        disabled={false}
        onPress={handleSubmit(submitHandler)}/>
    </View>
  )
})