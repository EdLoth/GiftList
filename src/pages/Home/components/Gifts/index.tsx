/* eslint-disable @typescript-eslint/no-unused-vars */
import { BottomCoffes, CardCoffe, CardTop, CartButton, ContentCoffes, HeaderCoffes, SectionCoffesContainer, TitleCoffe, TitlePage, ValueInfos } from "./styles";
import { FormatValue } from '../../../../data'
import { BsGiftFill } from 'react-icons/bs'
import { data } from "../../../../graphql/data";

export function Gifts() {

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
                                    <span>R$</span><span>{FormatValue(Response.price)}</span>
                                </ValueInfos>
                                <BottomCoffes>
                                    <CartButton 
                                    target="_blank"

                                    href={`https://wa.me/5571988495124?text=Ol%C3%A1+%C3%8Dsis%2C+acabei+de+olhar+a+lista+e+selecionei+o+presente+${Response.name}%2C+no+valor+${Response.price}%2C+correspondente+ao+ID%3A%23${Response.id}%2C+como+esperado+o+link+do+produto+esta+aqui%3A${Response.link}.`}
                                    >
                                        Selecionar Presente
                                        <BsGiftFill color="#FFF" weight="fill" />
                                    </CartButton>
                                </BottomCoffes>
                            </CardCoffe>
                        </>

                    );
                })}
            </ContentCoffes>
        </SectionCoffesContainer>
    );
}