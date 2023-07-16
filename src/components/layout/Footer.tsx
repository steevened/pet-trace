import { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="text-center bg-foreground/90 py-10 text-background">
      <div className="container ">
        <p className="font-semibold">
          © {new Date().getFullYear()} Steven Alvarado™. Todos los derechos
          reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
