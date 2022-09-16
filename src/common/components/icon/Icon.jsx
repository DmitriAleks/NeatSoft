import { useContext } from 'react';
import { ReactComponent as AngularLogo } from '../../../assets/icon/angular.svg';
import { ReactComponent as ReactLogo } from '../../../assets/icon/react.svg';
import { ReactComponent as LinuxLogo } from '../../../assets/icon/linux.svg';
import { ReactComponent as JavascriptLogo } from '../../../assets/icon/js.svg';
import { ReactComponent as DockerLogo } from '../../../assets/icon/docer.svg';
import { ReactComponent as NestJSLogo } from '../../../assets/icon/nestJS.svg';
import { ReactComponent as YII2Logo } from '../../../assets/icon/yll2.svg';
import { ThemeContext } from '../../../App';
import { LIGHT_THEME } from '../../constants/constants';

export const Icon = ({ logo, color }) => {
    const themeControl = useContext(ThemeContext);
    const defaultColor =
        themeControl.themeName === LIGHT_THEME ? '#4C5EFE' : '#68f7c3';

    const selectedLogo = () => {
        switch (logo) {
            case 'angular':
                return <AngularLogo fill={color || defaultColor} />;
            case 'react':
                return <ReactLogo fill={color || defaultColor} />;
            case 'linux':
                return <LinuxLogo fill={color || defaultColor} />;
            case 'javascript':
                return <JavascriptLogo fill={color || defaultColor} />;
            case 'docker':
                return <DockerLogo fill={color || defaultColor} />;
            case 'nest.js':
                return <NestJSLogo fill={color || defaultColor} />;
            case 'yii2':
                return <YII2Logo fill={color || defaultColor} />;
            default:
                // eslint-disable-next-line react/jsx-no-useless-fragment
                return <AngularLogo fill={defaultColor} />;
        }
    };
    return selectedLogo();
};
