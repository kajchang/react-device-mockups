import * as React from 'react';

import Device from '../Device';

export type Props = {
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>
};

export default class iPhone7Hand2 extends React.Component<Props> {
    render() {
        return (
            <Device { ...this.props } device='iPhone7Hand_2' orientation='portrait' color='black'/>
        )
    }
}
