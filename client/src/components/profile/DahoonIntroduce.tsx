import { ReactElement, useEffect, useState } from 'react';
import { Typography } from '@components/common/Typography/Typography';
import { StackBadge } from '@components/ui/badge/StackBadge';

export const DahoonIntroduce = (): ReactElement => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <article className={'intro'}>
      <div className={'intro-body'} style={loading ? { width: `100%` } : { width: `0%` }}>
        <section className={'w-100 intro-text-animation'}>
          <div className={'intro-body--top'}>
            <picture className={'profile-img-container'}>
              <div className={'profile-img'} />
              <div className={'profile-caption-block'}>
                <div className="text-wrapper">
                  <Typography
                    fontColor={'white'}
                    variant={'body1'}
                    className="typing-animation m-auto"
                  >
                    {/*{MyConfig.INTRODUCE.short_description}*/}
                    TEST
                  </Typography>
                </div>
              </div>
            </picture>
            <div className={'contact-container pt-26'}>
              <Typography
                fontWeight={'semibold'}
                fontColor={'white'}
                variant={'h1'}
                className={'intro-items-label'}
              >
                Contact
              </Typography>
              {/*{MyConfig.INFORMATION.map((value, index) => {*/}
              {/*  return (*/}
              {/*    <span*/}
              {/*      className={'hover-underline-animation intro-sub-info mb-8'}*/}
              {/*      key={value._id + '-info' + index}*/}
              {/*    >*/}
              {/*      <Icon type={value.type} width={24} height={24} className={'mr-8'} />*/}
              {/*      <a target={'_blank'} href={value.url} rel="noopener noreferrer">*/}
              {/*        <Typography variant={'sub1'} fontColor={'white'}>*/}
              {/*          {value.title}*/}
              {/*        </Typography>*/}
              {/*      </a>*/}
              {/*    </span>*/}
              {/*  );*/}
              {/*})}*/}
              TEST
            </div>
            <div className={'skills-container pt-16'}>
              <Typography
                fontWeight={'semibold'}
                fontColor={'white'}
                variant={'h1'}
                className={'intro-items-label'}
              >
                Skills
              </Typography>
              <div>
                <div className={'skills-badge-container'}>
                  <StackBadge width={20} height={20} type={'typescript'} />
                  <StackBadge width={20} height={20} type={'vue'} />
                  <StackBadge width={20} height={20} type={'vuex'} />
                  <StackBadge width={20} height={20} type={'react'} />
                  <StackBadge width={20} height={20} type={'redux'} />
                  <StackBadge width={20} height={20} type={'reactQuery'} />
                </div>
                <div className={'skills-badge-container mt-12'}>
                  <StackBadge width={20} height={20} type={'express'} />
                  <StackBadge width={20} height={20} type={'nestjs'} />
                  <StackBadge width={20} height={20} type={'mongodb'} />
                  <StackBadge width={20} height={20} type={'mysql'} />
                </div>
                <div className={'skills-badge-container mt-12'}>
                  <StackBadge width={20} height={20} type={'git'} />
                  <StackBadge width={20} height={20} type={'docker'} />
                  <StackBadge width={20} height={20} type={'aws'} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <article className={'arrow_wrapper intro-text-animation'}>
          <div className="s1_arrow">
            <div className="scroll-arrow" />
            <div className="scroll-arrow" />
            <div className="scroll-arrow" />
          </div>
        </article>
      </div>
    </article>
  );
};
