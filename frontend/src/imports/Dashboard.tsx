import svgPaths from "./svg-eoxo8t85xb";
import clsx from "clsx";
import imgRectangle189 from "figma:asset/e1e23a9c3f1b2bbc7822de5ffc698586c42b95c5.png";
import imgVector from "figma:asset/3a50b0861afc406b697132adda4209363e220db7.png";
import imgVector1 from "figma:asset/8aefddd87b050d9322b90706063f67d0381abad3.png";
import imgVector2 from "figma:asset/a0ce39db2f56293166be08fbc73442d458cf37be.png";
import imgVector3 from "figma:asset/0045cd5eb644fcb5733393100bc06939c577afa6.png";

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="css-wc1msa size-[25px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        {children}
      </svg>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("css-wc1msa size-[19px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        {children}
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="css-wc1msa size-[30px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        {children}
      </svg>
    </div>
  );
}

function Group({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="css-bz2tic inset-[8.33%]">
      <div className="css-roiesn inset-[8.33%]" data-name="Vector">
        <div className="css-trglf0 inset-[-2.42%]">{children}</div>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="bg-white css-ik8djj w-[378px]">
      <div className="css-2gbjjk css-7abz5d px-[36px] py-[17px] w-full">
        <p className="css-6n7io8 css-aql4oy css-nf5ac4 text-[rgba(60,60,59,0.5)] w-[317px]">{text}</p>
      </div>
      <div aria-hidden="true" className="border-[#d9d9d9] css-qo0psr css-s3s1qq inset-[-1px]" />
    </div>
  );
}

function Frame1381Helper() {
  return (
    <div className="css-wc1msa h-[45.5px] w-0">
      <div className="css-trglf0 inset-[0_-1px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 45.5">
          <path d="M1 0V45.5" id="Vector 154" stroke="var(--stroke-0, #3C3C3B)" strokeOpacity="0.2" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
type Helper2Props = {
  text: string;
  text1: string;
};

function Helper2({ text, text1 }: Helper2Props) {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[5px]">
      <p className="css-5p3fjx css-6n7io8 css-nf5ac4 text-[#3c3c3b]">{text}</p>
      <p className="css-6n7io8 css-nf5ac4 css-yldwsi text-[#236eff] w-[74px]">{text1}</p>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[5px]">
      <p className="css-5p3fjx css-6n7io8 css-nf5ac4 text-[#3c3c3b]">{text}</p>
      <p className="css-6n7io8 css-nf5ac4 css-rs6ag5 text-[#236eff]">{text1}</p>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  text2: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, text2, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("css-9uyk0n css-paq0kv gap-[35px]", additionalClassNames)}>
      <p className="css-5p3fjx css-6n7io8 css-nf5ac4">{text}</p>
      <p className="css-5p3fjx css-6n7io8 css-nf5ac4">{text1}</p>
      <p className="css-5p3fjx css-6n7io8 css-nf5ac4">{text2}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="css-i3fc2g css-paq0kv gap-[10px] h-[15px] left-[6.5px] top-[1.5px] w-[30px]">
      <div className="css-e3wplg css-fzpq6d css-l0lw4y h-full min-h-px min-w-px text-white">
        <p className="css-8zr56v css-x78r3n">{text}</p>
      </div>
      <div className="css-gxdil1 css-roiesn left-0 size-[9px] top-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Group">
            <g id="Vector"></g>
            <path d={svgPaths.p3363b880} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="bg-[#f6faff] css-vf8mzy size-full" data-name="Dashboard">
      <div className="bg-[#eff4ff] css-roiesn h-[1117px] left-0 top-0 w-[332px]" />
      <div className="css-roiesn h-[1117px] left-[332px] top-0 w-[1002px]">
        <div className="css-trglf0 inset-[0_-0.07%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1002.75 1117">
            <g id="Frame 1363">
              <path d="M1002 0V1106.5" id="Vector 143" opacity="0.3" stroke="var(--stroke-0, #3C3C3B)" strokeOpacity="0.7" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="css-paq0kv css-wfwx8q gap-[81px] left-[32px] top-[70px]">
        <div className="css-paq0kv css-snkgse gap-[25px]">
          <div className="css-cojfp6 size-[73px]">
            <img alt="" className="css-5eam1e css-9unj7x css-t7m0mk css-trglf0 inset-0 max-w-none size-full" src={imgRectangle189} />
          </div>
          <p className="css-1vguvc css-6n7io8 css-nf5ac4 text-[#767676]">Logo</p>
        </div>
        <div className="css-liobgr css-paq0kv gap-[40px]">
          <div className="css-9uyk0n css-paq0kv gap-[10px]">
            <div className="css-stnnzu h-[66px] w-[276px]">
              <div aria-hidden="true" className="border-[#236eff] css-1qorjj css-s3s1qq inset-0" />
            </div>
            <div className="css-17xzu7 css-paq0kv gap-[10px] left-[26px] top-[13px]">
              <div className="css-wc1msa size-[40px]" data-name="bxs:dashboard">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                  <g id="bxs:dashboard">
                    <path d={svgPaths.p2c853180} fill="var(--fill-0, #236EFF)" id="Vector" />
                  </g>
                </svg>
              </div>
              <p className="css-52wvln css-6n7io8 css-nf5ac4 text-[#236eff]">Dashboard</p>
            </div>
          </div>
          <div className="css-9uyk0n css-paq0kv gap-[50px] px-[33px] py-0">
            <div className="css-paq0kv css-snkgse gap-[15px]">
              <Wrapper>
                <g id="grommet-icons:transaction">
                  <path d={svgPaths.p3ea23900} id="Vector" stroke="var(--stroke-0, #767676)" strokeWidth="3" />
                </g>
              </Wrapper>
              <p className="css-52wvln css-6n7io8 css-nf5ac4 text-[#767676]">Transaction</p>
            </div>
            <div className="css-paq0kv css-snkgse gap-[10px]">
              <Wrapper>
                <g id="ph:target-bold">
                  <path d={svgPaths.p5937900} fill="var(--fill-0, #767676)" id="Vector" />
                </g>
              </Wrapper>
              <p className="css-52wvln css-6n7io8 css-nf5ac4 text-[#767676]">Plan</p>
            </div>
            <div className="css-paq0kv css-snkgse gap-[10px]">
              <div className="css-gxdil1 css-wc1msa size-[30px]" data-name="solar:wallet-money-linear">
                <div className="css-roiesn inset-[12.5%_8.33%_8.33%_8.33%]" data-name="Group">
                  <div className="css-trglf0 inset-[-6.32%_-6%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26.7507">
                      <g id="Group">
                        <path d="M6.5 10.2507H11.5" id="Vector" stroke="var(--stroke-0, #767676)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                        <path d={svgPaths.p3a46b700} id="Vector_2" stroke="var(--stroke-0, #767676)" strokeWidth="3" />
                        <path d={svgPaths.p2bf5b600} id="Vector_3" stroke="var(--stroke-0, #767676)" strokeWidth="3" />
                        <path d={svgPaths.p1b7b2a40} id="Vector_4" stroke="var(--stroke-0, #767676)" strokeLinecap="round" strokeWidth="3" />
                        <path d="M21.4888 15.2507H21.5013" id="Vector_5" stroke="var(--stroke-0, #767676)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="css-52wvln css-6n7io8 css-nf5ac4 text-[#767676]">Budget</p>
            </div>
            <div className="css-paq0kv css-snkgse gap-[10px]">
              <Wrapper>
                <g id="uil:setting">
                  <path d={svgPaths.pda51800} fill="var(--fill-0, #767676)" id="Vector" />
                </g>
              </Wrapper>
              <p className="css-52wvln css-6n7io8 css-nf5ac4 text-[#767676]">Settings</p>
            </div>
            <div className="css-paq0kv css-snkgse gap-[10px]">
              <Wrapper>
                <g id="material-symbols:help-outline">
                  <path d={svgPaths.pef35680} fill="var(--fill-0, #767676)" id="Vector" />
                </g>
              </Wrapper>
              <p className="css-52wvln css-6n7io8 css-nf5ac4 text-[#767676]">Help</p>
            </div>
          </div>
        </div>
      </div>
      <div className="css-fc0ya css-iqljnn gap-[37px] left-[374px] top-[calc(50%+0.5px)]">
        <div className="css-22itc5 css-paq0kv gap-[30px]">
          <div className="css-9uyk0n css-paq0kv gap-[10px] h-[136px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[292px]">
            <div className="bg-white css-713lfe h-[136px] w-full" />
            <div className="css-vxfvp6 css-wfwx8q gap-[5px] left-[calc(50%-1px)] top-[calc(50%-0.5px)]">
              <p className="css-52wvln css-6n7io8 css-nf5ac4 text-[#263238]">Total Money</p>
              <div className="css-paq0kv css-snkgse gap-[15px]">
                <p className="css-1ldde css-b4sivm css-nf5ac4 text-[#263238]">Rp 20.000</p>
                <div className="bg-[#11cd00] css-mqbupm h-[18px] w-[43px]">
                  <Text text="50%" />
                </div>
              </div>
            </div>
          </div>
          <div className="css-9uyk0n css-paq0kv gap-[10px] h-[136px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <div className="bg-[#00cfe8] css-713lfe h-[136px] w-[281px]" />
            <div className="css-vxfvp6 css-wfwx8q gap-[5px] left-1/2 px-px py-0 top-[calc(50%-0.5px)]">
              <p className="css-52wvln css-6n7io8 css-nf5ac4 text-white">This Month’s income</p>
              <div className="css-paq0kv css-snkgse gap-[15px]">
                <p className="css-1ldde css-b4sivm css-nf5ac4 text-white">Rp 50.000</p>
                <div className="bg-[#11cd00] css-mqbupm h-[18px] w-[43px]">
                  <Text text="50%" />
                </div>
              </div>
            </div>
          </div>
          <div className="css-9uyk0n css-paq0kv gap-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <div className="bg-white css-713lfe h-[136px] w-[281px]" />
            <div className="css-vxfvp6 css-wfwx8q gap-[5px] left-[calc(50%-0.5px)] top-[calc(50%-0.5px)]">
              <p className="css-52wvln css-6n7io8 css-nf5ac4 text-[#263238]">Expenses this month</p>
              <div className="css-paq0kv css-snkgse gap-[15px]">
                <p className="css-1ldde css-b4sivm css-nf5ac4 text-[#263238]">Rp 10.000</p>
                <div className="bg-[#11cd00] css-mqbupm h-[18px] w-[43px]">
                  <Text text="50%" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="css-wc1msa h-[483px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full">
          <div className="bg-white css-yozq13 h-[483px] left-0 top-0 w-[918px]" />
          <div className="css-vxfvp6 css-wfwx8q gap-[32px] left-[calc(50%-0.5px)] top-[calc(50%+0.5px)]">
            <div className="css-9uyk0n css-paq0kv gap-[14px]">
              <div className="css-paq0kv css-sf5ny4 w-[833px]">
                <p className="css-1c0w4f css-6n7io8 css-nf5ac4 text-[#3c3c3b]">Spending Report</p>
                <div className="bg-[#236eff] css-lph0zk css-paq0kv h-[36px] px-[16px] py-[10px]">
                  <p className="css-6n7io8 css-8f0xr5 css-nf5ac4 text-white">View Report</p>
                </div>
              </div>
              <div className="css-22itc5 css-paq0kv gap-[30px]">
                <p className="css-6n7io8 css-nf5ac4 css-v4acln text-[#3c3c3b]">{`12 Months `}</p>
                <p className="css-6n7io8 css-nf5ac4 css-v4acln text-[rgba(60,60,59,0.2)]">3 months</p>
                <p className="css-6n7io8 css-nf5ac4 css-v4acln text-[rgba(60,60,59,0.2)]">30 days</p>
                <p className="css-6n7io8 css-nf5ac4 css-v4acln text-[rgba(60,60,59,0.2)]">7 days</p>
                <p className="css-6n7io8 css-nf5ac4 css-v4acln text-[rgba(60,60,59,0.2)]">24 Hours</p>
              </div>
            </div>
            <div className="css-4cmtt6 css-bnsnia css-z9kw5f">
              <div className="css-40wwlm css-paq0kv gap-[30px] ml-0 mt-0 text-[#3c3c3b]">
                <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">100</p>
                <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">80</p>
                <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">60</p>
                <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">40</p>
                <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">20</p>
                <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">0</p>
              </div>
              <div className="css-h29oyu css-paq0kv gap-[20px] ml-[38px] mt-[12px]">
                <div className="css-wc1msa h-[250px] w-[779px]">
                  <div className="css-trglf0 inset-[-0.2%_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 779 251">
                      <g id="Frame 1336">
                        <path d="M0 0.5H779" id="Vector 143" stroke="var(--stroke-0, #3C3C3B)" strokeOpacity="0.1" />
                        <path d="M0 50.5H779" id="Vector 146" stroke="var(--stroke-0, #3C3C3B)" strokeOpacity="0.1" />
                        <path d="M0 100.5H779" id="Vector 147" stroke="var(--stroke-0, #3C3C3B)" strokeOpacity="0.1" />
                        <path d="M0 150.5H779" id="Vector 148" stroke="var(--stroke-0, #3C3C3B)" strokeOpacity="0.1" />
                        <path d="M0 200.5H779" id="Vector 149" stroke="var(--stroke-0, #3C3C3B)" strokeOpacity="0.1" />
                        <path d="M0 250.5H779" id="Vector 150" stroke="var(--stroke-0, #3C3C3B)" strokeOpacity="0.1" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="css-jvpnk3 css-paq0kv text-[#3c3c3b] w-[761px]">
                  <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">Jan</p>
                  <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">Feb</p>
                  <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">March</p>
                  <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">Apr</p>
                  <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">May</p>
                  <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">Jun</p>
                  <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">Jul</p>
                  <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">Aug</p>
                  <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">Sep</p>
                  <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">Oct</p>
                  <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">Nov</p>
                  <p className="css-6n7io8 css-8f0xr5 css-nf5ac4">Des</p>
                </div>
              </div>
              <div className="css-4cmtt6 css-kvtrne css-z9kw5f ml-[61px] mt-[28px]">
                <div className="css-63f6qa h-[101px] ml-0 mt-[88px] w-[691px]" data-name="Chart-2">
                  <div className="css-trglf0 inset-[-0.99%_-0.14%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 693 103">
                      <path d={svgPaths.p139a4b00} id="Chart-2" stroke="var(--stroke-0, #FEB700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="css-63f6qa h-[102px] ml-0 mt-[75px] w-[691px]" data-name="Chart-1">
                  <div className="css-trglf0 inset-[-0.98%_-0.14%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 693 104">
                      <path d={svgPaths.p2c9bb400} id="Chart-1" stroke="var(--stroke-0, #0047D1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="css-63f6qa ml-[357px] mt-[72px] size-[8px]">
                  <Wrapper1 additionalClassNames="css-trglf0 inset-[-100%_-125%_-150%_-125%]">
                    <g filter="url(#filter0_d_1_607)" id="Ellipse 12">
                      <circle cx="14" cy="12" fill="var(--fill-0, white)" r="4" />
                      <circle cx="14" cy="12" r="3.5" stroke="var(--stroke-0, #EDEDED)" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28" id="filter0_d_1_607" width="28" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.486275 0 0 0 0 0.552941 0 0 0 0 0.709804 0 0 0 0.12 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_607" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_607" mode="normal" result="shape" />
                      </filter>
                    </defs>
                  </Wrapper1>
                </div>
                <div className="css-paq0kv css-rx7kfw ml-[317px] mt-0" data-name="Info">
                  <div className="bg-white css-jj4m37 css-paq0kv p-[12px]" data-name="Info">
                    <div aria-hidden="true" className="border-[#ededed] css-a4fzdx css-s3s1qq inset-0 shadow-[0px_2px_15px_0px_rgba(124,141,181,0.12)]" />
                    <div className="css-dczajm css-paq0kv">
                      <p className="css-1lar9o css-8ctrjk css-nf5ac4 text-[#a7a7a7]">Income</p>
                      <p className="css-1lar9o css-nf5ac4 css-p08gbo text-[#263238]">Rp 25.000</p>
                    </div>
                  </div>
                  <div className="css-bhht40">
                    <div className="css-ayg824 css-mg3gna">
                      <div className="css-vf8mzy h-[5px] w-[12px]" data-name="Pin">
                        <div className="css-trglf0 inset-[6.03%_0_0_0]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 4.69829">
                            <path d={svgPaths.p23e4180} fill="var(--fill-0, white)" id="Pin" stroke="var(--stroke-0, #EDEDED)" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="css-wc1msa h-[319px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[918px]">
          <div className="bg-white css-yozq13 h-[319px] left-0 top-0 w-[918px]" />
          <div className="css-ax5lyr css-hdvvn5 gap-[282px] left-[calc(50%-2px)] top-[33px]">
            <p className="css-1c0w4f css-6n7io8 css-nf5ac4 text-[#3c3c3b]">Transaction History</p>
            <div className="css-22itc5 css-paq0kv gap-[20px]">
              <div className="bg-[#236eff] css-lph0zk css-paq0kv gap-[11px] px-[15px] py-[10px]">
                <div className="css-wc1msa h-[18px] w-[15px]" data-name="Icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18">
                    <g id="Icon">
                      <path d={svgPaths.p30c17c80} fill="var(--fill-0, white)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="css-6n7io8 css-8f0xr5 css-nf5ac4 text-white">View Report</p>
              </div>
              <div className="bg-[#236eff] css-lph0zk css-paq0kv gap-[11px] px-[15px] py-[10px]">
                <Wrapper2>
                  <g id="octicon:filter-16">
                    <path d={svgPaths.p2bd60480} fill="var(--fill-0, white)" id="Vector" />
                  </g>
                </Wrapper2>
                <p className="css-6n7io8 css-8f0xr5 css-nf5ac4 text-white">View Report</p>
              </div>
            </div>
          </div>
          <div className="css-paq0kv css-wgo77b left-[62px] top-[103px] w-[802px]">
            <div className="css-9uyk0n css-paq0kv gap-[30px]">
              <p className="css-6n7io8 css-8f0xr5 css-nf5ac4 text-[#3c3c3b]">Transaction</p>
              <div className="css-9uyk0n css-paq0kv gap-[30px]">
                <div className="css-22itc5 css-paq0kv gap-[10px]">
                  <Wrapper3>
                    <path d={svgPaths.p2d8c5700} fill="var(--fill-0, #0B8800)" id="Vector" />
                  </Wrapper3>
                  <div className="css-6n7io8 css-vkpzlc css-y39kf6 h-[25px] text-[#3c3c3b] w-[58px]">
                    <p className="css-8zr56v css-x78r3n">Spotify</p>
                  </div>
                </div>
                <div className="css-22itc5 css-paq0kv gap-[10px]">
                  <Wrapper3>
                    <g clipPath="url(#clip0_1_582)" id="simple-icons:starbucks">
                      <path d={svgPaths.p127ded00} fill="var(--fill-0, #086000)" id="Vector" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_582">
                        <rect fill="white" height="25" width="25" />
                      </clipPath>
                    </defs>
                  </Wrapper3>
                  <div className="css-6n7io8 css-vkpzlc css-y39kf6 h-[25px] text-[#3c3c3b] w-[89px]">
                    <p className="css-8zr56v css-x78r3n">Starbucks</p>
                  </div>
                </div>
                <div className="css-22itc5 css-paq0kv gap-[10px]">
                  <Wrapper3>
                    <g id="Frame 1354">
                      <circle cx="12.5" cy="12.5" fill="var(--fill-0, #0EAC00)" id="Ellipse 1481" r="12.5" />
                      <g id="bxl:upwork">
                        <path d={svgPaths.p1b229880} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </g>
                  </Wrapper3>
                  <div className="css-6n7io8 css-vkpzlc css-y39kf6 h-[25px] text-[#3c3c3b] w-[89px]">
                    <p className="css-8zr56v css-x78r3n">Upwork</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="css-jvpnk3 css-paq0kv w-[602px]">
              <div className="css-9uyk0n css-paq0kv gap-[30px]">
                <p className="css-6n7io8 css-8f0xr5 css-nf5ac4 text-[#3c3c3b]">ID</p>
                <Helper text="#7890328" text1="#3948509" text2="#2980298" additionalClassNames="text-[#a5a5a5]" />
              </div>
              <div className="css-dczajm css-paq0kv gap-[30px]">
                <p className="css-6n7io8 css-8f0xr5 css-nf5ac4 text-[#3c3c3b]">Amount</p>
                <div className="css-dczajm css-paq0kv gap-[35px]">
                  <p className="css-5p3fjx css-6n7io8 css-nf5ac4 text-[#d50000]">-Rp 13.000</p>
                  <p className="css-5p3fjx css-6n7io8 css-nf5ac4 text-[#d50000]">-Rp 24.000</p>
                  <p className="css-5p3fjx css-6n7io8 css-nf5ac4 text-[#11cd00]">+Rp 50.000</p>
                </div>
              </div>
              {[...Array(2).keys()].map((_, i) => (
                <div className="css-9uyk0n css-paq0kv gap-[30px]">
                  <p className="css-6n7io8 css-8f0xr5 css-nf5ac4 text-[#3c3c3b]">Date</p>
                  <Helper text="16 Jan 2:30pm" text1="15 Jan 3:30pm" text2="14 Jan 2:30pm" additionalClassNames="text-[#3c3c3b]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="css-roiesn h-[108px] left-[431.5px] top-[894px] w-[825.5px]">
        <div className="css-trglf0 inset-[-0.46%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 825.5 109">
            <g id="Frame 1350">
              <path d="M0 0.5H825.5" id="Vector 151" stroke="var(--stroke-0, #3C3C3B)" strokeOpacity="0.2" />
              <path d="M0 54.5H825.5" id="Vector 152" stroke="var(--stroke-0, #3C3C3B)" strokeOpacity="0.2" />
              <path d="M0 108.5H825.5" id="Vector 153" stroke="var(--stroke-0, #3C3C3B)" strokeOpacity="0.2" />
            </g>
          </svg>
        </div>
      </div>
      <div className="css-paq0kv css-wfwx8q gap-[45px] left-[1370px] top-[53px]">
        <div className="css-9uyk0n css-paq0kv gap-[20px]">
          <div className="css-paq0kv css-snkgse gap-[159px]">
            <p className="css-2t400e css-6n7io8 css-wc1msa text-[#3c3c3b]">
              <span className="css-jpsr3q">{`My `}</span>
              <span className="css-b823hc css-l4z9a text-[#236eff]">Card</span>
            </p>
            <div className="css-paq0kv css-snkgse gap-[10px]">
              <div className="css-wc1msa h-[14px] w-[15px]" data-name="ph:plus-bold">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
                  <g id="ph:plus-bold">
                    <path d={svgPaths.p24bc1480} fill="var(--fill-0, #3C3C3B)" id="Vector" />
                  </g>
                </svg>
              </div>
              <p className="css-6n7io8 css-8f0xr5 css-nf5ac4 text-[#3c3c3b]">Add Card</p>
            </div>
          </div>
          <div className="css-paq0kv css-snkgse">
            <div className="css-wc1msa h-[217px] shadow-[20px_0px_6.5px_0px_rgba(0,0,0,0.25)] w-[362px]">
              <div className="css-46dzz7 css-yozq13 h-[217px] left-0 top-0 w-[362px]" />
              <div className="css-vxfvp6 css-wfwx8q gap-[71px] left-[calc(50%-0.5px)] top-1/2 w-[297px]">
                <div className="css-paq0kv css-sf5ny4 w-[297px]">
                  <p className="css-2czdef css-6n7io8 css-nf5ac4 text-white">Steven Lous</p>
                  <Wrapper1 additionalClassNames="css-wc1msa size-[28px]">
                    <g id="ri:amazon-fill">
                      <path d={svgPaths.p74a4f00} fill="var(--fill-0, #E06C00)" id="Vector" />
                    </g>
                  </Wrapper1>
                </div>
                <div className="css-paq0kv css-sf5ny4 w-[297px]">
                  <div className="css-9uyk0n css-paq0kv gap-[6px]">
                    <p className="css-6n7io8 css-8svv8e css-nf5ac4 text-[#d5d5d5]">BCA Platinum</p>
                    <div className="css-paq0kv css-snkgse gap-[20px]">
                      <p className="css-62yd16 css-6n7io8 css-nf5ac4 text-white">4787</p>
                      {[...Array(2).keys()].map((_, i) => (
                        <div className="css-wc1msa h-[4px] w-[25px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 4">
                            <g id="Frame 1366">
                              <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 1482" r="2" />
                              <circle cx="9" cy="2" fill="var(--fill-0, white)" id="Ellipse 1483" r="2" />
                              <circle cx="16" cy="2" fill="var(--fill-0, white)" id="Ellipse 1484" r="2" />
                              <circle cx="23" cy="2" fill="var(--fill-0, white)" id="Ellipse 1485" r="2" />
                            </g>
                          </svg>
                        </div>
                      ))}
                      <p className="css-62yd16 css-6n7io8 css-nf5ac4 text-white">4787</p>
                    </div>
                  </div>
                  <div className="css-wc1msa h-[25px] w-[50px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 25">
                      <g id="Frame 1371">
                        <ellipse cx="16.5" cy="12.5" fill="var(--fill-0, #F41919)" id="Ellipse 1486" rx="16.5" ry="12.5" />
                        <ellipse cx="33.5" cy="12.5" fill="var(--fill-0, #FF8A00)" id="Ellipse 1487" rx="16.5" ry="12.5" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="css-9uyk0n css-paq0kv gap-[45px]">
          <Helper1 text="Card Holder" text1="Steven Lous" />
          <Helper1 text="Card Number" text1="4787 8749 8403 4787" />
          <div className="css-paq0kv css-sf5ny4 w-[362px]">
            <Helper2 text="Status" text1="Active" />
            <Frame1381Helper />
            <Helper2 text="Expired Date" text1="09/26" />
            <Frame1381Helper />
            <Helper2 text="Category" text1="Gold" />
          </div>
        </div>
      </div>
      <div className="css-roiesn h-0 left-[1334px] top-[660px] w-[456px]">
        <div className="css-trglf0 inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 456 1">
            <path d="M0 0.5H456" id="Vector 156" stroke="var(--stroke-0, #3C3C3B)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
      <div className="css-paq0kv css-wfwx8q gap-[45px] left-[1370px] top-[707px]">
        <div className="css-paq0kv css-sf5ny4 w-[378px]">
          <div className="css-gxdil1 css-wc1msa size-[62px]" data-name="solar:user-circle-linear">
            <Group>
              <img alt="" className="css-8zr56v max-w-none size-full" height="54.167" src={imgVector} width="54.167" />
            </Group>
          </div>
          <div className="css-gxdil1 css-wc1msa size-[62px]" data-name="solar:user-circle-linear">
            <Group>
              <img alt="" className="css-8zr56v max-w-none size-full" height="54.167" src={imgVector1} width="54.167" />
            </Group>
          </div>
          <div className="css-gxdil1 css-wc1msa size-[62px]" data-name="solar:user-circle-linear">
            <Group>
              <img alt="" className="css-8zr56v max-w-none size-full" height="54.167" src={imgVector2} width="54.167" />
            </Group>
          </div>
          <div className="css-gxdil1 css-wc1msa size-[62px]" data-name="solar:user-circle-linear">
            <Group>
              <img alt="" className="css-8zr56v max-w-none size-full" height="54.167" src={imgVector3} width="54.167" />
            </Group>
          </div>
          <Wrapper2 additionalClassNames="css-gxdil1">
            <g id="Group">
              <g id="Vector"></g>
              <path clipRule="evenodd" d={svgPaths.p16e78700} fill="var(--fill-0, #3C3C3B)" fillRule="evenodd" id="Vector_2" />
            </g>
          </Wrapper2>
        </div>
        <div className="css-9uyk0n css-paq0kv gap-[30px]">
          <Text1 text="Enter amound" />
          <Text1 text="Note" />
          <div className="bg-[#236eff] css-2gbjjk css-7zg9ei h-[68px] px-[36px] py-[17px] w-[378px]">
            <p className="css-5yt1vn css-6n7io8 css-nf5ac4 text-white w-[317px]">Send Money</p>
          </div>
        </div>
      </div>
    </div>
  );
}