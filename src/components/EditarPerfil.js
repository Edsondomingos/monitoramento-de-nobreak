import * as React from 'react';
import { ImageBackground } from 'react-native';
import { Container, Titulo, TextoBtn, Botao, Entrada } from '../../assets/styledComponents/Components';
import { getDocs, deleteDoc, updateDoc, doc, collection } from "firebase/firestore";
import { db } from "../Config/firebaseconfig";
import { Button, View, Text, FlatList } from 'react-native';
import { useState } from 'react';

export default (props) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [telefone, setTelefone] = useState('')
    const [usuarios, setUsuario] = useState([{}])
    const [idUsuarios, setIdUsuario] = useState('')

    async function listar() {
        const usuariosCol = collection(db, 'usuarios');
        const usuariosSnapshot = await getDocs(usuariosCol);
        const usuariosList = usuariosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsuario(usuariosList);
    }
    async function deletar(id_usuarios) {
        await deleteDoc(doc(db, "usuarios", id_usuarios));
        setNome('');
        setTelefone('');
        setIdUsuario('');
        listar();
    }
    function atualizar() {
        updateDoc(doc(db, 'usuarios', idUsuarios), {
            nome: nome,
            cpf: cpf,
            email: email,
            senha: senha,
            telefone: telefone
        }).then(() => {
            alert("Editado");
            //props.navigation.navigate('Menu');
        }).catch((error) => {
            alert(error)
        })
        setNome('');
        setCpf(''),
        setTelefone('');
        setIdUsuario('');
        listar();
    }

    return (
        <Container>
            <ImageBackground source={require('../../img/iot.jpg')} style={{ width: 100, height: 100 }} >
            </ImageBackground>
            <Titulo>Editar Usuário</Titulo>
            <Entrada
                value={nome} placeholder='Nome completo' onChangeText={setNome}
            />
            <Entrada value={cpf} placeholder='Digite seu CPF' onChangeText={setCpf} />
            {/*<Entrada
                value={email} placeholder='Digite seu email' onChangeText={setEmail}
            /> */}
            <Entrada
                value={telefone} placeholder='Digite o telefone' onChangeText={setTelefone}
            />
            {/*<Entrada
                value={senha} placeholder='Senha' onChangeText={setSenha}
                secureTextEntry={true}
        /> */}
            <Botao
                onPress={atualizar}
            >
                <TextoBtn>Atualizar</TextoBtn>
            </Botao>
            <Text>{'\n\n'}</Text>
            <Button title='Dados' onPress={listar} />
            <Text>{'\n'}</Text>
            {/*<Text>DADOS</Text>*/}
            <FlatList
                // de onde vem os dados
                data={usuarios}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View>
                        <Text>ID: {item.id}</Text>
                        <Text>Nome: {item.nome}</Text>
                        <Text>CPF: {item.cpf}</Text>
                        {/*<Text>{item.email}</Text>
                        <Text>{item.senha}</Text>*/}
                        <Text>Celular: {item.telefone}</Text>

                        <Button title='Editar' onPress={() => {
                            setNome(item.nome);
                            setCpf(item.cpf);
                            setEmail(item.email);
                            setSenha(item.senha);
                            setTelefone(item.telefone);
                            setIdUsuario(item.id);
                        }} />
                        <Button title='Deletar' onPress={() => {
                            deletar(item.id)
                        }} />
                        <Text>{'\n'}</Text>
                    </View>
                } />
        </Container>
    )
}