"""empty message

Revision ID: 0626a8ea656f
Revises: ae78e8f7ca96
Create Date: 2025-01-16 18:21:42.304566

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0626a8ea656f'
down_revision = 'ae78e8f7ca96'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('lastname', sa.String(length=120), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('lastname')
        batch_op.drop_column('name')

    # ### end Alembic commands ###