import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons'; // Importa todos os ícones

const ActionButton = ({ children, iconName, ...props }) => {
  const icon = Icons[iconName];
  return (
    <button {...props}>
      <FontAwesomeIcon icon={icon} /> {children}
    </button>
  );
};

export default ActionButton;
