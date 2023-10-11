import { Modal } from "react-bootstrap";
import { Title } from "../../../Auth/Login/styles";

interface Props {
    url: string;
    nome: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    closeModal: any
    show: boolean
}

export function ModalImage({ url, nome, closeModal, show }: Props) {
    return (
        <Modal centered animation show={show} size='lg' onHide={() => closeModal()} >
            <Modal.Header>
                <Modal.Title style={{width: '100%', padding: 0}}>
                        <Title style={{ color: 'black', textAlign: 'center', width: '100%', padding: 0 }}>
                            {nome}
                        </Title>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="all-center">
                <img src={url} alt={nome} width={'100%'} />
            </Modal.Body>
        </Modal>
    )
}