import About from './components/About';
import AppLayout from './components/AppLayout';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <AppLayout>
      <About />
      <Experience />
      <Projects />
      <Skills />
    </AppLayout>
  );
}
