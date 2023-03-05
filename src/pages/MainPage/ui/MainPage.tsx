import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('main')}
        </div>
    );
};
