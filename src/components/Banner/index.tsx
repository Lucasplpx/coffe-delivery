import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import {
  BannerContainer,
  WrapperMainContent,
  InfoUm,
  InfoDois,
  GroupUm,
  GroupDois,
} from './styles';

export function Banner() {
  return (
    <BannerContainer>
      <WrapperMainContent>
        <InfoUm>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </InfoUm>
        <InfoDois>
          <GroupUm>
            <div>
              <span>
                <ShoppingCart size={16} color='white' weight='fill' />
              </span>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <span>
                <Package size={16} color='white' weight='fill' />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </div>
          </GroupUm>
          <GroupDois>
            <div>
              <span>
                <Timer size={16} color='white' weight='fill' />
              </span>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <span>
                <Coffee size={16} color='white' weight='fill' />
              </span>
              <p>O café chega fresquinho até você</p>
            </div>
          </GroupDois>
        </InfoDois>
      </WrapperMainContent>
    </BannerContainer>
  );
}
