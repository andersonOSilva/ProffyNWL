import React,{useState, FormEvent} from 'react'

import './style.css'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import {useHistory} from 'react-router-dom'
import warningIco from "../../assets/images/icons/warning.svg"
import Textarea from '../../components/TextArea'
import Select from '../../components/Select'
import api from '../../services/api'

function TeacherForm() {
    const history = useHistory()

    const [name,setName]=useState()
    const [whatsapp,setWhatsapp]=useState()
    const [avatar,setAvatar]=useState()
    const [bio,setBio]=useState()
    
    const [cost,setCost]=useState()
    const [subject,setSubject]=useState()
    
    const [scheduleItems, setscheduleItems] = useState([
        {week_day:0,from:'',to:''}
    ])


    function addNewScheduleItem(){
        setscheduleItems([
            ...scheduleItems ,
            {week_day:0,from:'',to:''}
        ])
        
        
    }
    function setscheduleItemValue(position:number,field:string,value:string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem,index) => {
            if (index === position){
                return {...scheduleItem, [field]:value}
            }
            return scheduleItem
        });
        
        // console.log(updatedScheduleItems);
        setscheduleItems(updatedScheduleItems);
    }
    function handleCreateClass(e:FormEvent){
        e.preventDefault();
        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost:Number(cost),
            schedule: scheduleItems
        });
        
        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost:Number(cost),
            schedule: scheduleItems
            
        }).then(() =>{
            alert("cadastro realizado com sucesso")
            history.push('/')
        }).catch(()=>{
            alert("deu b.o")
        }

        )
        
        

    }

    
    return ( 
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrivel que voce quer dar aulas" description="o primeiro passo é preencher esse formulario de inscrição"/>

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>
                            Seus dados
                        </legend>
                        
                        <Input 
                        label="Nome completo"
                        name="name"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}} />
                        
                        <Input
                        label="avatar"
                        name="avatar"
                        value={avatar}
                        onChange={(e) => {setAvatar(e.target.value)}}
                        />
                        
                        <Input
                        label="whatsapp"
                        name="whatsapp"
                        value={whatsapp}
                        onChange={(e) => {setWhatsapp(e.target.value)}}
                        />
                        
                        <Textarea
                        label="Biografia"
                        name="bio"
                        value={bio}
                        onChange={(e) => {setBio(e.target.value)}}
                        />

                        
                    </fieldset>
                    <fieldset>
                        <legend>
                            Sobre a aula
                        </legend>
                        <Select
                        name="subject"
                        value={subject}
                        label="Matéria"
                        onChange={(e)=>{
                            setSubject(e.target.value)
                        }}
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
                        <Input 
                        name="cost" 
                        label="Custo da hora aula"
                        value={cost}
                        onChange={(e)=>{
                            setCost(e.target.value)
                        }}/>
                        
                    </fieldset>
                    <fieldset>
                        <legend>Horarios disponiveis

                        <button type="button" onClick={addNewScheduleItem}> + Novo horario</button>
                        </legend>
                        {scheduleItems.map( (scheduleItem,index) => {

                        return (<div className="schedule-item">

                            <Select key={scheduleItem.week_day}
                            name="week_day"
                            label="Dia da semana"
                            value={scheduleItem.week_day}
                            onChange={(e) => {
                                setscheduleItemValue(index, 'week_day', e.target.value)
                            }}
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
                            <Input name="from"
                            label="Das"
                            type="time"
                            value={scheduleItem.from}
                            onChange={(e) => {
                                setscheduleItemValue(index, 'from', e.target.value)
                            }}
                            />
                            
                            <Input
                            name="to"
                            label="Ate"
                            type="time"
                            value={scheduleItem.to}
                            onChange={(e) => {
                                setscheduleItemValue(index, 'to', e.target.value)
                            }}
                            />
                        </div>
                        )
                    }
                    )
                    }
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIco} alt="Aviso importante"/>
                            importante! <br/>
                            Preencha todos os dados 

                        </p>
                        <button type="submit">
                            Salvar Cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
                
     )
            }

export default TeacherForm