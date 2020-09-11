import * as React from 'react';

import Device, { Props as DeviceProps } from '../Device';

export type Props = Omit<Omit<DeviceProps, 'device'>, 'orientation'> & {
    color?: 'black' | 'white' | 'gold'
};

export default class Macbook2015 extends React.Component<Props> {
    render() {
        return (
            <Device color='black' { ...this.props } device='Macbook2015' orientation='portrait'/>
        )
    }
}
