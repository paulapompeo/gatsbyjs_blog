import React from 'react'

import * as S from './styled';

const PostItem = () => (
    <S.PostItemLink to="/slug/">
        <S.PostItemWrapper>
            <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>01 de novembro de 2020 - 4 minutos de leitura</S.PostItemDate>
                <S.PostItemTitle>
                    Diga nao ao Medium: tenha sua propria plataforma
                </S.PostItemTitle>
                <S.PostItemDescription>
                    Algumas razoes para voce ter sua propria plataforma ao inves de solucoes como o Medium
                </S.PostItemDescription>

            </S.PostItemInfo>
        </S.PostItemWrapper>

    </S.PostItemLink>
)

export default PostItem;