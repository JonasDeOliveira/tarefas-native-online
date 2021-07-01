import { Alert, Platform } from 'react-native'

// const server = 'http://46b3a3b5f245.ngrok.io'

// Mac Os
// const server = 'http://localhost:3000'

// Android Studio
const server = 'http://10.0.2.2:3000'

// Genymotion
// const server = 'http://10.0.3.2:3000'


function showError(err) {

    if (err.response && err.response.data) {
        Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err.response.data}`)
        return
    }

    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
}

function showSuccess(msg) {
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess} 