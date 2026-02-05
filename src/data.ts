import { Users, Award, Monitor, Languages } from 'lucide-react';

export const personalData = {
    name: "Margarita De La Cruz Curo",
    title: "Licenciada en Educación Primaria",
    email: "margarita.delacruz.04@unsch.edu.pe",
    phone: "(+51) 901 213 691",
    address: "Jr. Arequipa, última cuadra N 184, Ayacucho",
    about: "Licenciada en Educación Primaria por la Universidad Nacional de San Cristóbal de Huamanga. Con experiencia en instituciones educativas privadas y públicas de Ayacucho y Huanta, me caracterizo por mi vocación pedagógica, empatía y compromiso con el aprendizaje integral. Poseo habilidades en comunicación efectiva, gestión de grupos y aplicación de recursos digitales. Mi objetivo es fortalecer la calidad educativa promoviendo valores y creatividad.",
};

export const education = [
    {
        institution: "Universidad Nacional de San Cristóbal de Huamanga",
        degree: "Licenciatura en Educación Primaria",
        period: "2019 - 2024",
        details: [
            "Especialización en pedagogía y desarrollo integral del niño.",
            "Formación en competencias educativas y tecnologías digitales.",
            "Prácticas preprofesionales en entornos urbanos y rurales."
        ]
    }
];

export const experience = [
    {
        role: "Docente de Nivel Primario",
        institution: "Institución Educativa César Vallejo - Huanta",
        period: "2025",
        description: "Docencia activa enfocada en el aprendizaje significativo y el desarrollo integral del estudiante.",
        images: [
            "/evidence/cv/1.png",
            "/evidence/cv/2.png",
            "/evidence/cv/3.png",
            "/evidence/cv/4.png"
        ]
    },
    {
        role: "Docente de Nivel Primario",
        institution: "Institución Educativa Smart Kids - Ayacucho",
        period: "2024",
        description: "Implementación de estrategias pedagógicas innovadoras en educación privada.",
        images: [
            "/evidence/sk/sk1.png",
            "/evidence/sk/sk2.png",
            "/evidence/sk/sk3.png"
        ]
    },
    {
        role: "Apoyo Pedagógico y Enseñanza",
        institution: "Diversas Instituciones en Ayacucho",
        period: "2024",
        description: "Experiencia versátil en soporte educativo y manejo de grupos en diferentes contextos.",
        images: [
            "/evidence/others/1.png",
            "/evidence/others/2.png",
            "/evidence/others/3.png",
            "/evidence/others/4.png"
        ]
    },
    {
        role: "Docente – Programa Vacacional 2023",
        institution: "Municipalidad Distrital de Quinua",
        period: "Febrero 2023",
        description: "Reconocimiento oficial mediante Resolución de Alcaldía N.º 032-2023-MDQ/A por participación y aporte en el Programa Vacacional “Vacaciones Útiles Divertidas 2023”, destacando los servicios de sostenibilidad educativa brindados a niños y niñas del distrito de Quinua."
    }
];

export const skills = [
    { name: "Comunicación Efectiva", icon: Users },
    { name: "Empatía y Paciencia", icon: Users },
    { name: "Manejo de Grupos", icon: Users },
    { name: "Herramientas Digitales", icon: Monitor },
    { name: "Resolución de Problemas", icon: Award },
    { name: "Idiomas: Español, Quechua e inglés", icon: Languages }
];

export const documents = [
    { title: "Título de Licenciatura (UNSCH)", file: "/docs/titulo_licenciatura.pdf", type: "Grado Académico" },
    { title: "Certificado Ofimática", file: "/docs/certificado_ofimatica.pdf", type: "Certificación" },
    { title: "Contrato de trabajo en César Vallejo", file: "/docs/contrato_cesarvallejo.pdf", type: "Laboral" },
    { title: "Constancia Laboral Smart Kids", file: "/docs/constancia_smartkids.pdf", type: "Laboral" },
    {
        title: "Reconocimiento de la Municipalidad de Quinua por enseñanza en el Programa Vacacional",
        file: "/docs/resolucion_alcaldia_quinua_2023.pdf",
        type: "Reconocimiento Oficial"
    },
];
