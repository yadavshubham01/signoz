import {
	CheckCircleFilled,
	CloseCircleFilled,
	ExclamationCircleFilled,
	MinusCircleFilled,
} from '@ant-design/icons';
import { Loader } from '@signozhq/icons';
import { Spin } from 'antd';

export function getDeploymentStage(value: string): string {
	switch (value) {
		case 'in_progress':
			return 'In Progress';
		case 'deployed':
			return 'Deployed';
		case 'dirty':
			return 'Dirty';
		case 'failed':
			return 'Failed';
		case 'unknown':
			return 'Unknown';
		default:
			return '';
	}
}

export function getDeploymentStageIcon(value: string): JSX.Element {
	switch (value) {
		case 'in_progress':
			return (
				<Spin
					indicator={<Loader style={{ fontSize: 15 }} className="animate-spin" />}
				/>
			);
		case 'deployed':
			return <CheckCircleFilled />;
		case 'dirty':
			return <ExclamationCircleFilled />;
		case 'failed':
			return <CloseCircleFilled />;
		case 'unknown':
			return <MinusCircleFilled />;
		default:
			return <span />;
	}
}
