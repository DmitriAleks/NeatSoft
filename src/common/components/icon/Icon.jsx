import {ReactComponent as AngularLogo} from "../../../assets/icon/angular.svg";
import {ReactComponent as ReactLogo} from "../../../assets/icon/react.svg";
import {ReactComponent as LinuxLogo} from "../../../assets/icon/linux.svg";
import {ReactComponent as JavascriptLogo} from "../../../assets/icon/js.svg";
import {ReactComponent as DockerLogo} from "../../../assets/icon/docer.svg";
import {ReactComponent as NestJSLogo} from "../../../assets/icon/nestJS.svg";
import {ReactComponent as YII2Logo} from "../../../assets/icon/yll2.svg";

export const  Icon = ({logo, color = '#4C5EFE' }) => {
    const selectedLogo = () => {
        switch (logo){
            case 'angular':
                return    <AngularLogo fill={color} />;
            case 'react':
                return    <ReactLogo fill={color} />;
            case 'linux':
                return    <LinuxLogo fill={color} />;
            case 'javascript':
                return    <JavascriptLogo fill={color} />;
            case 'docker':
                return    <DockerLogo fill={color} />;
            case 'nest.js':
                return    <NestJSLogo fill={color} />;
            case 'yii2':
                return    <YII2Logo fill={color} />;
            default:
                // eslint-disable-next-line react/jsx-no-useless-fragment
                return  <AngularLogo fill={color} />;
        }
    }
    return (
        selectedLogo()
    )
}