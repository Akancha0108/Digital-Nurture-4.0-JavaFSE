import styles from './CohortDetails.module.css';

const CohortDetails = ({ cohort }) => {
  
  const titleColor = cohort.status.toLowerCase() === 'ongoing' ? 'green' : 'blue';

  return (
    <div className={styles.box}>
      <h3 style={{ color: titleColor }}>{cohort.name}</h3>
      <dl>
        <dt>Start Date:</dt>
        <dd>{cohort.startDate}</dd>

        <dt>End Date:</dt>
        <dd>{cohort.endDate}</dd>

        <dt>Status:</dt>
        <dd>{cohort.status}</dd>

        <dt>Coach:</dt>
        <dd>{cohort.coach}</dd>

        <dt>Trainer:</dt>
        <dd>{cohort.trainer}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
