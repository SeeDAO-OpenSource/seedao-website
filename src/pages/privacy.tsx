import styled from "styled-components";

export default function Privacy(){
    return     <IntroDetails>
            <h5 className="card-title">信息保护政策 :</h5>
            <p className="text-muted">我们深知个人信息对你的重要性，并会全力保护你的个人信息安全。</p>

            <br/><h5 className="card-title">我们如何收集和使用你的个人信息 :</h5>
            <p className="text-muted">为了实现特定业务功能，我们需要收集和使用你的部分个人信息。除法律另有规定，你有权拒绝我们收集和使用你的个人信息。但请理解，如你拒绝我们收集和使用业务功能所必需的个人信息，则可能无法使用对应的业务功能。</p>
            <p className="text-muted">部分业务功能的实现需要开启你的设备权限。我们会通过弹窗向你申请获得授权，你可以随时通过 SeeDAO 的功能页面或设备系统设置关闭这些权限。</p>

            <br/><h5 className="card-title">我们如何对外提供你的个人信息 :</h5>
            <p className="text-muted">为向你提供产品或服务，我们可能会与第三方共同处理、共享或委托其处理你的部分个人信息。</p>
            <p className="text-muted">我们只会在必要的目的和范围内向第三方提供你的个人信息，并审慎评估、监测第三方的安全保障能力，要求他们遵守法律法规、合作协议并采取相关的安全措施来保护你的个人信息。</p>

            <br/><h5 className="card-title">我们如何存储你的个人信息 :</h5>
            <p className="text-muted">存储地点：美国。保存期限：为实现目的所必需的期限和法律法规要求的期限内。保存期限届满的处理方式：删除或进行匿名化处理。</p>

            <br/><h5 className="card-title">你的权利 :</h5>
            <p className="text-muted">你可以通过 SeeDAO 联系我们：查阅、更正、复制、删除你的个人信息；</p>
            <p className="text-muted">改变你授权同意的范围或撤回你的授权；注销/删除账号；行使其他法定的个人信息主体权利。</p>
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
