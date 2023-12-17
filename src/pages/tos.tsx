import styled from "styled-components";

export default function Tos(){
    return     <IntroDetails>
        <h5 className="card-title">一般条款 :</h5>
        <p className="text-muted">本一般条款对您的 SeeDAO 账户并对本站的服务适用，并且构成您与本站之间的一项有约束力的合同。</p>

        <h5 className="card-title">1. 接受 :</h5>
        <p className="text-muted">您在账户登陆与注册过程中接受本一般条款，或者，您访问或使用本站的服务，即表示您确认您已接受本一般条款及其他适用的条款，并表示您同意成为本项具有约束力合同的一方。如果您对此不同意，则您无权访问或使用本站的服务。</p>
        <p className="text-muted">您代表您为之行事（例如作为雇员或承包商）的公司或其他法律实体或（若不涉及公司或法律实体）代表您自己个人（无论是哪一种情形，均称为“您”）同意本条款。您声明并保证，您具有代表该实体（如有）和您自己行事并约束该实体（如有）和您自己的相应权利、权限（以及行为能力—比如您已达到法定年龄）。</p>

        <h5 className="card-title">2. 帳戶 :</h5>
        <p className="text-muted">您可能需要有帐户才能使用提供内容。如有人（包括您的授权使用者在内）透过您或您的帐户取得、存取或使用提供内容，您要为这些人负责。换言之（以下仅为例示），您要负责使您的授权使用者遵守本条款，包括这些人对其帐户之使用，即如同每一个授权使用者都是您本人。特定情况下，您的授权使用者可能必须建立个人帐户，或是必须同意适用条款规定才能取得、存取或使用提供内容，但这样的规定不影响您对于您授权使用者应负起的责任。</p>
        <p className="text-muted">您也必须负责维护您帐户的安全性以及所有与您帐户相关活动的安全性。换言之（以下仅为例示），您 (i) 应确保只有您的授权使用者才能使用与您帐户相关的提供内容，且 (ii) 应保管好使用者名称或密码，不可随意泄漏（除非是告诉授权帐户管理人）。</p>
        <p className="text-muted">您应确保您的所有帐户信息（包括您或您的授权使用者所提供、有关您注册任何提供内容的任何信息）现在是且持续是正确完整信息。</p>

    </IntroDetails>
}

const IntroDetails = styled.ul`
  max-width: 900px;
  margin: 100px auto;
  padding-bottom: 50px;
  line-height: 2em;
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 768px) {
    width: 88%;
    margin: 100px auto 0;
    font-size: 14px;
    line-height: 1.5em;
  }
`;
