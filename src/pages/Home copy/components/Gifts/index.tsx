/* eslint-disable @typescript-eslint/no-unused-vars */
import { BottomCoffes, CardCoffe, CardTop, CartButton, CartButtonImage, ContentCoffes, HeaderCoffes, SectionCoffesContainer, TitleCoffe, TitlePage, ValueInfos } from "./styles";
import { FormatValue } from '../../../../data'
import { QueryGetPresents } from "../../../../graphql/Services/Presents";
import { BsImageFill, BsGiftFill } from 'react-icons/bs'
import { ModalImage } from "./ModalImage";
import { useState } from "react";
import { MutationAssociatePresentUser, MutationDeleteAssociatePresentUser } from "../../../../graphql/Services/UserPresents";
import { setAssociatePresentUserData } from "../../../../graphql/formValidations";
import Swal from "sweetalert2";

export function Gifts() {
    const { data } = QueryGetPresents({
        variables: {
            isSelected: false
        }
    })

    const [showImage, setShowImage] = useState(false)
    const [id, setId] = useState(0)
    const [nameProduto, setNameProduto] = useState('')
    const [urlImage, setUrlImage] = useState('')


    const { error, errors, handleSubmit, loading, register, FormAssociatePresentUser } = MutationAssociatePresentUser()
    const {FormDeleteAssociatePresentUser} = MutationDeleteAssociatePresentUser()

    const onSubmit = async (data: setAssociatePresentUserData, name: string, price: string, link: string) => {
        try {
        
          // Realize a requisição e espere que ela seja concluída
          const result = await FormAssociatePresentUser(data);
      
          // Exiba uma mensagem de sucesso e aguarde a confirmação do usuário
          await Swal.fire({
            title: 'Sucesso!',
            text: 'Presente selecionado com sucesso.',
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Confimar',
          }).then((result) => {
            if (result.isConfirmed) {
              // Crie um elemento <a> com o link que você deseja abrir
              const link2 = document.createElement('a');

              link2.setAttribute('hidden', '');
              link2.setAttribute('target', '_blank');
              link2.href = `${link}`;

              link2.click();
            }
          });
        } catch (error) {
          // Em caso de erro na requisição, exiba uma mensagem de erro
          Swal.fire('Erro!', 'Ocorreu um erro durante o processo.', 'error');
        }
      };
      

    function CloseModalShowImage() {
        setShowImage(false)
        setId(0)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function OpenModalShowImage(id: number, name: string, url: string) {
        setShowImage(true)
        setNameProduto(name)
        setUrlImage(url)
        setId(id)
    }

    return (
        <SectionCoffesContainer>

            <ContentCoffes>
                <HeaderCoffes>
                    <TitlePage>Lista de Presentes:</TitlePage>
                </HeaderCoffes>
                {data?.GetPresents.map((Response) => {
                    return (
                        <>
                            <CardCoffe className="card" key={Response.id}>
                                <CardTop bgImage={Response.urlImg} ></CardTop>

                                <TitleCoffe>
                                    {Response.name}
                                </TitleCoffe>
                                <ValueInfos>
                                    <span>R$</span><span>{FormatValue(parseInt(Response.price))}</span>
                                </ValueInfos>
                                <BottomCoffes>
                                    <CartButtonImage
                                        onClick={(e) => {
                                            OpenModalShowImage(Response.id, Response.name, Response.urlImg)
                                        }}
                                    >
                                        Ver Imagem
                                        <BsImageFill color="#FFF" weight="fill" />
                                    </CartButtonImage>
                                    <form onSubmit={(e) => handleSubmit((data) => onSubmit(data, Response.name, Response.price, Response.link))(e)}>
                                        <input hidden type="number" defaultValue={Response.id}  {...register('presentId',{required: true, valueAsNumber: true})} />
                                        <input hidden type="number" defaultValue={2} {...register('userId',{required: true, valueAsNumber: true})}/>

                                        <CartButton type="submit"  >
                                            Selecionar Presente
                                            <BsGiftFill color="#FFF" weight="fill" />
                                        </CartButton>
                                    </form>
                                </BottomCoffes>
                            </CardCoffe>
                        </>

                    );
                })}
            </ContentCoffes>
            {showImage ? (
                <ModalImage
                    nome={nameProduto}
                    url={urlImage}
                    closeModal={CloseModalShowImage}
                    show={showImage}
                ></ModalImage>
            ) : (
                <></>
            )}
        </SectionCoffesContainer>
    );
}