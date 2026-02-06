import { useState } from 'react';
import { personalData, education, experience, skills, documents } from './data';
import {
  Download, Mail, MapPin, Menu, X,
  GraduationCap, Briefcase, Star, FileCheck,
  ChevronRight, Languages, Sparkles, FileText,
  Monitor
} from 'lucide-react';
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

import { Camera } from "lucide-react";
import Lightbox from "./components/Lightbox";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);


  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-brand-secondary selection:text-white">

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-radial-turk backdrop-blur-lg border-b border-white/20 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 text-2xl rounded-lg font-rubickVyn bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold shadow-lg shadow-brand-primary/20">
              M
            </div>
            <span className="text-xl font-miChromma bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
              Margarita De-La-Cruz Curo
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {['Perfil', 'Experiencia', 'Habilidades', 'Documentos'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-miChromma text-cyan-200 hover:text-brand-primary transition-colors uppercase tracking-wide">
                {item}
              </a>
            ))}
            <a href="#contacto" className="px-5 py-2 rounded-full bg-pink-500 text-white text-sm font-bold hover:bg-pink-900 transition-all shadow-lg hover:shadow-glow transform hover:-translate-y-0.5">
              Contactar
            </a>
          </div>

          <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-4 shadow-xl animate-fade-in">
            {['Perfil', 'Experiencia', 'Habilidades', 'Documentos'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="block py-2 font-medium text-slate-600">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header id="perfil" className="relative pt-32 pb-20 lg:pt-32 lg:pb-16 px-6 overflow-hidden">

        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full bg-slate-50 z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-primary/90 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-brand-secondary/90 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-sm mb-2 border border-brand-primary/20 backdrop-blur-sm">
              <Sparkles size={16} /> Innovación Pedagógica
            </div>

            <h1 className="text-5xl lg:text-5xl font-miChromma leading-tight text-slate-900">
              Educación que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary">
                Inspira Futuros
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {personalData.about}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href="#documentos" className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold shadow-xl shadow-brand-primary/30 hover:shadow-brand-primary/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                <FileCheck size={20} /> Ver Credenciales
              </a>
              <a href={`mailto:${personalData.email}`} className="px-6 py-3 rounded-xl bg-white text-slate-700 font-bold border border-slate-200 hover:border-brand-primary hover:text-brand-primary hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                <Mail size={20} /> Envíame un correo
              </a>
            </div>

            <div className="pt-8 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 text-slate-500 text-sm font-medium">
              <span className="flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm"><MapPin size={16} className="text-brand-secondary" /> Ayacucho: Jr. Arequipa, última cuadra N 184, Perú</span>
              <span className="flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm"><Languages size={16} className="text-brand-secondary" /> Español, Quechua e Inglés</span>
            </div>
          </div>

          {/* Sección foto */}
          <div className="lg:w-1/2 flex justify-center perspective-1000">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 group">

              {/* Glow / fondo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-[2rem] rotate-6 opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Contenedor principal */}
              <div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl border-4 border-white overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 transform group-hover:-rotate-1 transition-transform duration-500">

                {/* Imagen */}
                <img
                  src="ruth-dlc.webp"
                  alt="Mi foto"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>
            </div>
          </div>


        </div>
      </header>

      {/* --- Barra de Estados --- */}
      <div className="bg-radial-roseviolet text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          <div className="p-4 rounded-lg hover:bg-white/5 transition-colors">
            <p className="text-4xl font-bold text-brand-secondary">2024</p>
            <p className="text-xs text-slate-200 uppercase tracking-widest mt-2 font-bold">Licenciatura UNSCH</p>
          </div>
          <div className="p-4 rounded-lg hover:bg-white/5 transition-colors">
            <p className="text-4xl font-bold text-cyan-200">3+</p>
            <p className="text-xs text-slate-200 uppercase tracking-widest mt-2 font-bold">Instituciones</p>
          </div>
          <div className="p-4 rounded-lg hover:bg-white/5 transition-colors">
            <p className="text-4xl font-bold text-white">100%</p>
            <p className="text-xs text-slate-200 uppercase tracking-widest mt-2 font-bold">Vocación</p>
          </div>
          <div className="p-4 rounded-lg hover:bg-white/5 transition-colors">
            <p className="text-4xl font-bold text-brand-accent">Idiomas</p>
            <p className="text-xs text-slate-200 uppercase tracking-widest mt-2 font-bold">Español-Quechua-Inglés</p>
          </div>
        </div>
      </div>

      {/* --- Linea de tiempo de Experiencia Laboral --- */}
      <section id="experiencia" className="py-24 bg-radial-rose">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-rubickVyn text-rose-500 tracking-widest mb-2">Trayectoria Profesional</h2>
            <h3 className="text-2xl text-slate-900">Experiencia que Transforma</h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-primary/0 before:via-brand-primary/20 before:to-brand-primary/0">
            {experience.map((job, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                {/* Icon Marker */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 group-hover:bg-brand-secondary group-hover:scale-110 transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 text-slate-400 group-hover:text-white">
                  <Briefcase size={16} />
                </div>

                {/* Card */}
                <div className="relative group w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:bg-radial-smart hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 group-hover:-translate-y-1">


                  <div className="flex flex-col md:flex-row justify-between md:items-start mb-2 gap-2">


                    {job.images && (
                      <button
                        onClick={() => {
                          setLightboxImages(job.images);
                          setLightboxIndex(0);
                          setLightboxOpen(true);
                        }}
                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all bg-white p-1 rounded-full shadow-md hover:scale-110"
                      >
                        <Camera size={18} className="text-brand-secondary" />
                      </button>
                    )}


                    <h3 className="font-bold text-lg text-slate-800 leading-tight">{job.role}</h3>
                    <span className="text-[10px] font-bold bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-full uppercase tracking-wide w-fit whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <h4 className="text-brand-accent font-medium text-sm mb-3 flex items-center gap-1">
                    {job.institution}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SKILLS & EDUCATION --- */}
      <section id="habilidades" className="py-24 bg-radial-cyan relative overflow-hidden">
        {/* <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-secondary/95 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-brand-primary/95 rounded-full blur-3xl"></div> */}

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start relative z-10">

          {/* Left: Skills */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <div className="p-2 bg-brand-secondary/10 rounded-lg text-brand-secondary"><Star size={24} /></div>
              Competencias
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-4 border-l-4 border-brand-primary group cursor-default">
                  <div className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:text-brand-primary group-hover:bg-brand-primary/10 transition-colors">
                    <skill.icon size={20} />
                  </div>
                  <span className="font-medium text-slate-700">{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Languages size={20} className="text-brand-accent" /> Dominio de Idiomas
              </h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-slate-700">Español</span>
                    <span className="font-bold text-brand-primary">Nativo</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-brand-primary to-blue-400 h-full rounded-full w-full shadow-sm"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-slate-700">Quechua</span>
                    <span className="font-bold text-brand-secondary">Intermedio/Avanzado</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-brand-secondary to-pink-300 h-full rounded-full w-[95%] shadow-sm"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-slate-700">Inglés</span>
                    <span className="font-bold text-green-600">Básico</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-800 to-green-400 h-full rounded-full w-[25%] shadow-sm"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Education */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary"><GraduationCap size={24} /></div>
              Formación
            </h3>

            {education.map((edu, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-2xl shadow-lg border border-white relative overflow-hidden group hover:border-brand-primary/20 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                <h4 className="text-xl font-bold text-brand-dark relative z-10 w-10/12">{edu.institution}</h4>
                <p className="text-brand-secondary font-bold mt-2 text-lg relative z-10">{edu.degree}</p>
                <div className="flex items-center gap-2 mt-2 mb-6">
                  <span className="font-mono text-xs bg-slate-200 px-2 py-1 rounded text-slate-600 font-bold">{edu.period}</span>
                </div>

                <ul className="space-y-3 relative z-10">
                  {edu.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0"></div>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-6 p-6 bg-brand-dark rounded-2xl text-white shadow-xl shadow-brand-dark/20 relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 text-white/5 rotate-12">
                <Monitor size={120} />
              </div>
              <h4 className="font-bold mb-3 flex items-center gap-2 text-lg">Formación Digital</h4>
              <p className="text-slate-300 text-sm mb-4 relative z-10">
                Capacitada en herramientas modernas para la educación híbrida, gestión de aulas virtuales y ofimática.
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {['Google Classroom', 'Google Drive', 'Excel', 'PowerPoint', 'Canva'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs hover:bg-white hover:text-brand-dark transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DOCUMENTS REPOSITORY --- */}
      {/* <section id="documentos" className="py-24 bg-gradient-to-br from-slate-900 via-brand-dark to-slate-900 text-white relative"> */}
      <section id="documentos" className="py-24 bg-radial-violet text-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl text-violet-500 font-bold font-rubickVyn mb-4">Evidencia Profesional</h2>
              <p className="text-slate-900">
                Transparencia y profesionalismo. Acceso directo a certificaciones oficiales, diplomas y constancias que respaldan mi perfil.
              </p>
            </div>
            <a href="docs/cv_completo.pdf" className="px-6 py-3 bg-brand-secondary hover:bg-pink-600 rounded-lg font-bold transition-all flex items-center gap-2 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transform hover:-translate-y-0.5">
              <Download size={18} /> Descargar CV Completo
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="group bg-radial-grosso backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-brand-secondary/50 transition-all duration-300 flex flex-col hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-brand-primary/20 rounded-lg text-brand-primary group-hover:text-white group-hover:bg-brand-primary transition-colors">
                    <FileText size={24} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-2 py-1 rounded text-slate-300 group-hover:bg-white/20 transition-colors">
                    {doc.type}
                  </span>
                </div>

                <h3 className="font-bold text-lg mb-2 leading-tight group-hover:text-brand-secondary transition-colors">
                  {doc.title}
                </h3>

                <div className="mt-auto pt-6">
                  <a href={doc.file} target="_blank" rel="noopener noreferrer" className="w-full py-2 rounded border border-white/20 text-center text-sm font-medium hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center gap-2 group-hover:shadow-lg">
                    Ver Documento <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contacto" className="bg-radial-turk font-miChromma text-slate-500 py-8 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-cyan-400 mb-8">Contáctame por cualquiera de estos medios</h2>

          {/* <div className="flex justify-center gap-8 mb-12">
            <a href={`mailto:${personalData.email}`} className="flex flex-col items-center group">
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-brand-primary group-hover:text-white transition-all mb-3">
                <Mail size={24} />
              </div>
              <span className="text-sm text-green-200 font-medium group-hover:text-brand-primary transition-colors">Enviar Email</span>
            </a>
            <a href="#" className="flex flex-col items-center group">
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-brand-secondary group-hover:text-white transition-all mb-3">
                <Phone size={24} />
              </div>
              <span className="text-sm text-green-200 font-medium group-hover:text-brand-secondary transition-colors">Llamar</span>
            </a>
          </div> */}

          <div className="flex justify-center gap-10 mb-12">

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=margarita.delacruz.04@unsch.edu.pe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-red-500 group-hover:text-white transition-all mb-3 shadow-lg group-hover:scale-110">
                <Mail size={26} />
              </div>
              <span className="text-sm text-green-200 font-medium group-hover:text-red-400 transition-colors">
                Gmail
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/51901213691?text=Hola%20vi%20tu%20portafolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-green-500 transition-all mb-3 shadow-lg group-hover:scale-110">
                <FaWhatsapp size={28} className="text-green-400 group-hover:text-white" />
              </div>
              <span className="text-sm text-green-200 font-medium group-hover:text-green-400 transition-colors">
                WhatsApp
              </span>
            </a>

            {/* Messenger */}
            <a
              href="https://m.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-blue-600 transition-all mb-3 shadow-lg group-hover:scale-110">
                <FaFacebookMessenger size={28} className="text-blue-400 group-hover:text-white" />
              </div>
              <span className="text-sm text-green-200 font-medium group-hover:text-blue-400 transition-colors">
                Messenger
              </span>
            </a>

          </div>


          <div className="max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

          <p className="text-lg text-cyan-200 mb-2">
            Diseñado para destacar la excelencia educativa de <span className="text-pink-300 font-bold">Margarita De-La-Cruz</span>.
          </p>
          <p className="text-sm text-cyan-300">© 2026 Todos los derechos reservados.</p>
        </div>
      </footer>

      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          setIndex={setLightboxIndex}
          close={() => setLightboxOpen(false)}
        />
      )}

    </div>

  );
}

export default App;