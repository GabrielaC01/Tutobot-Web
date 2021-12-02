import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Profile from '../pages/Profile';
import Tutos from '../pages/Tutos';
import MisTutos from '../pages/MisTutos';
import NotFoundPage from '../pages/NotFoundPage';
import IniciarSesion from '../pages/IniciarSesion';
import Registro from '../pages/Registro';
import Start from '../components/Start';
import Question from '../components/Question';
import quizData from '../data/quiz.json';
import { useState } from 'react';
import TutosCreados from '../pages/TutosCreados';
import CrearTutos from '../pages/CrearTutos';
import Resultados from '../pages/Resultados';
import MisSesiones from '../pages/MisSesiones';

import Chatbot from '../components/Chatbot';
import EditarTuto from '../pages/EditarTuto';

const AppRouter = () => {

    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const quizStartHandler = ()=>{
        setStep(2);
    }

    return(
        
        <Router>
            
            <Navbar/>
            <Switch>

            

            <Route path='/start'>
                {step===1 && <Start onQuizStart={quizStartHandler} />}
                {step===2 && <Question 
                    data = {quizData.data[activeQuestion]}
                    onAnswerUpdate={setAnswers}
                    numberOfQuestions={quizData.data.length}
                    activeQuestion={activeQuestion}
                    onSetActiveQuestion={setActiveQuestion}
                    onSetStep={setStep} 
                />}
            </Route>

            <Route path='/perfil' component={Profile} />

            <Route path='/iniciarSesion' component={IniciarSesion} />

            <Route path="/tutos">
                <Tutos/>
            </Route>
            <Route path='/misSesiones' component= {MisSesiones} />
            <Route path='/mistutos' component={MisTutos} />
            <Route path='/resultados' component={Resultados} />
            <Route path='/tutoscreados' component={TutosCreados} />
            <Route path='/creartutos' component={CrearTutos} />
            <Route path='/editartuto' component={EditarTuto} />


            <Route path='*' component={NotFoundPage} />
                {/* <Tutos
                    title="Pregunta 1"
                    text="Es aquella integral cuya función es evaluada sobre una curva:"
                    opc1="Integral en recta"
                    opc2="Integral bajo la curva"
                    opc3="Integral de línea"
                    opc4="Integral doble"
                >
                </Tutos> */}
                {/* <Tutos
                    title="Pregunta 2"
                    text="Si una función es continua entonces es derivable."
                    opc1="V"
                    opc2="F"
                >
                </Tutos> */}
                {/* <Tutos
                    title="Pregunta 3"
                    text="Indique la función que no es derivable:"
                    opc1="f(x)=3x^3"
                    opc2="f(x)=|x^2-4|"
                    opc3="f(x)=ax^2+bx+c, a,b,c!=0"           
                >
                </Tutos> */}
                {/* <Tutos
                    title = "Pregunta 4"
                    text = "Calcula la derivada de la función f(x) = 3x + 5 en el punto de abscisa x=1."
                    opc1 = "f'(1) = 5"
                    opc2 = "f'(1) = 3"
                    opc3 = "f'(1) = x"
                    opc4 = "N.A"
                >
                </Tutos> */}
                {/* <Tutos
                    title = "Pregunta 5"
                    text = "Si el límite de una función en un punto dado no existe entonces tampoco existe su derivada por tanto se dice que la función no es derivable en dicho punto"
                    opc1 = "V"
                    opc2 = "F"
                ></Tutos>
                <Tutos
                    title = "Pregunta 6"
                    text = "Si f(x) = g(u) y u = u(x) entonces:"
                    opc1 = "f'(x) = g'(u)"
                    opc2 = "f'(x) = g'(u)"
                    opc3 = "f'(x) = g'(u)"
                    opc4 = "N.A"
                ></Tutos>
                <Tutos
                    title = "Pregunta 7"
                    text = "Es una secuencia ordenada de nucleótidos  en la molécula de ADN  y que contiene la información necesaria para la síntesis de proteínas."
                    opc1 = "Código genético"
                    opc2 = "Gen"
                    opc3 ="Alelo dominante"
                    opc4 = "Fenotipo"
                ></Tutos>
                <Tutos
                    title = "Pregunta 8"
                    text = "El conjunto de cromosomas  humanos ordenados de acuerdo a su forma y tamaño, toma el nombre de:"
                    opc1 = "Fenotipo"
                    opc2 = "Cariotipo"
                    opc3 = "Alelos"
                    opc4 = "N.A"
                ></Tutos>
                 
                
                <Tutos
                    title="Pregunta 9"
                    text="¿Que mecanismo de transporte utiliza la glucosa para poder entrar a la célula?"
                    opc1="Osmosis"
                    opc2="Difusión simple"
                    opc3="Fagocitosis"
                    opc4="Difusión facilitada"
                >
                </Tutos>
                <Tutos
                    title="Pregunta 10"
                    text="La enzima que separa las cadenas de DNA antes de su replicación es:"
                    opc1="DNA ligasa"
                    opc2="DNA helicasa"
                    opc3="DNA polimerasa"
                    opc4="DNA separasa"
                >
                </Tutos>
                <Tutos
                    title="Pregunta 11"
                    text="El huso mitótico se forma durante:"
                    opc1="Metafase"
                    opc2="Interfase"
                    opc3="Telofase"
                    opc4="Profase"
                ></Tutos>
                <Tutos
                    title="Pregunta 12"
                    text="Las proteinas portadoras son:"
                    opc1="Proteínas de transporte"
                    opc2="Proteínas receptoras"
                    opc3="Proteínas con canales"
                    opc4="Glucoproteínas"
                ></Tutos>
                <Tutos
                    title="Pregunta 13"
                    text="La fase S de la interfase se caracteriza por:"
                    opc1="Síntesis de DNA"
                    opc2="Crecimiento celular"
                    opc3="Diferenciación celular"
                    opc4="No duplicación de cromosomas"
                ></Tutos>
                <Tutos
                    title="Pregunta 14"
                    text="El semifluido que está dentro de los cloroplastos se llama:"
                    opc1="Matriz"
                    opc2="Citosol"
                    opc3="Citoplasma"
                    opc4="Estroma"
                ></Tutos> */}
            
            </Switch>
            <Chatbot/>
        </Router>
    )
}

export default AppRouter;