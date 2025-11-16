import { MigrationInterface, QueryRunner } from "typeorm";

export class TransactionUpdate1763304126768 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP COLUMN "userId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" ADD "userId" uuid NOT NULL`);
    }
}
