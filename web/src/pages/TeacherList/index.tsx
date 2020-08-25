import React, { useState, FormEvent } from 'react'

import { Link } from 'react-router-dom'


import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem, {Teacher} from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'

function TeacherList() {
    const [teachers, setTeachers] = useState([])

    const [subject,setSubject] = useState()
    const [week_day,setWeek_day] = useState()
    const [time,setTime] = useState()
    
    async function searchTeachers(e:FormEvent){
        e.preventDefault()
        
        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        });
        console.log(response.data)
        setTeachers(response.data);        
        
    }
    return ( 
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponiveis">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    
                <Select name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => {setSubject(e.target.value)}}
                        options={
                        [
                            {value:'Artes',label:"Artes"},
                            {value:'Biologia',label:"Biologia"},
                            {value:'Historia',label:"Historia"},
                            {value:'Sociologia',label:"Sociologia"},
                            {value:'Fisica',label:"Fisica"},
                            {value:'Portugues',label:"Portugues"}
                            
                        ]
                    }/>
                    <Select name="week_day"
                            label="Dia da semana"
                            value={week_day}
                            onChange={(e) => {setWeek_day(e.target.value)}}
                            options={
                        [
                            {value:'0',label:"Dom"},
                            {value:'1',label:"Seg"},
                            {value:'2',label:"Ter"},
                            {value:'3',label:"Qua"},
                            {value:'4',label:"Qui"},
                            {value:'5',label:"Sex"},
                            {value:'6',label:"Sab"}
                            
                        ]
                    }/>
                    <Input type="time"
                           name="time"
                           value={time}
                           onChange={(e) => {setTime(e.target.value)}}
                           label="Hora"/>
                    <button type="submit"> Buscar </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {

                   return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>

        </div> 
     )
}

export default TeacherList