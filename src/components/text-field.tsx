import React, { ChangeEventHandler, createRef, PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: .5rem;

    @media(max-width: 700px) {
        dispaly: block;
    }
`;

const DefaultInput = styled.input`
    display: block;
    width: 100%;
    border: 1px solid #cccccc;
    overflow: visible;
    box-sizing: border-box;

    // default size
    font-size: 1rem;
    padding: .25rem .75rem;

    @media (max-width: 700px) {
        padding: .75rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: .3rem;
    }
`;

const InvalidInput = styled(DefaultInput)`
    border-color: #dc3545;
`;

const InputLabel = styled.label`
    display: block;
    margin: 0 .5rem .5rem .5rem;

    // default size
    font-size: 1rem;

    @media (max-width: 700px) {
        font-size: 1.25rem;
    }
`;

export type Props = {
    label: string,
    value?: string,
    isDisabled?: boolean,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    validate?: (content: string) => boolean,
};

export type State = {
    fieldState: 'inactive' | 'activated' | 'focused' | 'hover' | 'error' | 'disabled',
};

export default class TextField extends PureComponent<Props, State> {
    state: State = {
        fieldState: 'inactive',
    };

    private _inputRef = createRef<HTMLInputElement>();

    componentDidMount() {
        const { fieldState } = this.state;

        if (fieldState === 'focused' && this._inputRef.current) {
            this._inputRef.current.focus();
        }
    }

    render() {
        const { isDisabled, label, onChange, value } = this.props;

        const Input = this._getInputComponent();

        return (
            <Container>
                <InputLabel>{label}</InputLabel>
                <Input
                    type="text"
                    value={value}
                    disabled={isDisabled}
                    onChange={onChange}
                    onClick={this._onClick}
                    innerRef={this._inputRef}
                    placeholder={label}
                />
            </Container>
        );
    }

    private _onClick = () => {
        this.setState({
            fieldState: 'focused',
        });
    }

    private _getInputComponent() {
        const { validate } = this.props;
        const { fieldState } = this.state;

        if (fieldState === 'inactive') {
            return DefaultInput;
        }

        if (this._inputRef.current && validate && !validate(this._inputRef.current.value || '')) {
            return InvalidInput;
        }

        return DefaultInput;
    }
}
