import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'

import ContactRegister from './ContactRegister'
import SignIn from './SignIn';
import GroupRegister from './GroupRegister';
import PhoneRegister from './PhoneRegister';
import ContactList from './ContactList';

export default function Home (){
    return (
        <div>
            <header>
                <Link to='/'>Home</Link>
                <Link to='/signin'>Nova Conta</Link>
                <Link to='/contacts/register'>Novo Contato</Link>
                <Link to='/contacts'>Lista de Contatos</Link>
                <Link to='/groups/register'>Novo Grupo</Link>
                <Link to='/phones/register'>Novo Telefone</Link>
            </header>

            <main>
                <Routes>
                    <Route path='/' component={Home} exact />
                    <Route path='/contacts/register' component={ContactRegister}/>
                    <Route path='/contacts' component={ContactList}/>
                    <Route path='/groups/register' component={PhoneRegister} />
                    <Route path='/groups/register' component={GroupRegister} />
                    <Route path='/signin' component={SignIn} />
                </Routes>
            </main>

        </div>
    )
}